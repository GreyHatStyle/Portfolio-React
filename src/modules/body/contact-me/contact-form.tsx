import { useState, useRef, type FormEvent } from "react";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { checkSpam } from "@/api/spamHam";
import "./contact-extra-styles.css"

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email is too long"),
  
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long (max 1000 characters)")
});

type FormData = z.infer<typeof contactFormSchema>;

const web3FormsClient = axios.create({
  timeout: 15000,
  headers: {
    'Accept': 'application/json',
  },
});

export default function ContactForm() {
  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  
  // Rate limiting state
  const lastSubmitTime = useRef<number>(0);
  const honeypotRef = useRef<HTMLInputElement>(null);

  // Rate limiting constants
  const MIN_SUBMIT_INTERVAL = 5000; // 5 seconds between submissions
  const MAX_SUBMISSIONS_PER_HOUR = 5; // Maximum 5 submissions per hour
  const SUBMIT_TIMESTAMPS = useRef<number[]>([]);

  
  const isRateLimited = (): boolean => {
    const now = Date.now();
    
    // Check minimum interval between submissions
    if (now - lastSubmitTime.current < MIN_SUBMIT_INTERVAL) {
      return true;
    }

    // Clean old timestamps (older than 1 hour)
    SUBMIT_TIMESTAMPS.current = SUBMIT_TIMESTAMPS.current.filter(
      timestamp => now - timestamp < 3600000 // 1 hour
    );

    // Check hourly limit
    if (SUBMIT_TIMESTAMPS.current.length >= MAX_SUBMISSIONS_PER_HOUR) {
      return true;
    }

    return false;
  };

 
  const sanitizeInput = (input: string): string => {
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocols
      .replace(/on\w+=/gi, ''); // Remove event handlers
  };



  // Submit form to Web3Forms
  const submitToWeb3Forms = async (formData: FormData) => {
    const submitData = new FormData();
    submitData.append("access_key", import.meta.env.VITE_REACT_APP_EMAIL_ACCESS);
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("message", formData.message);
    submitData.append("subject", "New Contact Form Submission");
    submitData.append("from_name", "Portfolio Contact Form");
    submitData.append("replyto", formData.email);

    const response = await web3FormsClient.post(
      "https://api.web3forms.com/submit", 
      submitData
    );

    return response.data;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Check honeypot (hidden field that should remain empty)
    if (honeypotRef.current?.value) {
      console.log("Bot detected via honeypot");
      return;
    }


    if (isRateLimited()) {
      setResult("Too many requests. Please wait before submitting again.");
      return;
    }

    setIsSubmitting(true);
    setResult("Sending...");
    setErrors({});

    try {
      const form = event.target as HTMLFormElement;
      const rawFormData = new FormData(form);


      const rawData = {
        name: sanitizeInput(rawFormData.get("name") as string || ""),
        email: sanitizeInput(rawFormData.get("email") as string || ""),
        message: sanitizeInput(rawFormData.get("message") as string || ""),
      };

      const validationResult = contactFormSchema.safeParse(rawData);
      
      if (!validationResult.success) {
        const zodErrors: Partial<Record<keyof FormData, string>> = {};
        
        validationResult.error.issues.forEach((error) => {
          const field = error.path[0] as keyof FormData;
          zodErrors[field] = error.message;
        });
        
        setErrors(zodErrors);
        setResult("Please fix the errors above");
        return;
      }

      const formData = validationResult.data;

      setResult("Checking for spam...");
      const fullText = `${formData.name} ${formData.email} ${formData.message}`;
      const isSpam = await checkSpam(fullText);

      if (isSpam) {
        setResult("Message contains suspicious content. Please revise your message.");
        return;
      }

      // Submit to Web3Forms
      setResult("Sending message...");
      const response = await submitToWeb3Forms(formData);

      if (response.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        form.reset();
        
        const now = Date.now();
        lastSubmitTime.current = now;
        SUBMIT_TIMESTAMPS.current.push(now);
        
        // Clear result after 5 seconds
        setTimeout(() => setResult(""), 5000);
      } else {
        console.error("Submission error:", response);
        setResult("Failed to send message. Please try again later.");
      }

    } 
    catch (error) {
      console.error("Error:", error);

      if (error instanceof AxiosError) {
        if (error.code === 'ECONNABORTED') {
          setResult("Request timeout. Please check your connection and try again.");
        } 
        else if (error.response?.status === 429) {
          setResult("Too many requests. Please wait and try again.");
        } 
        else {
          setResult("Network error. Please check your connection and try again.");
        }
      } else {
        setResult("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const shadow_class_from_ui = "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

  return (
    <div className={`contact-form-extra mt-8 p-6 bg-neutral-100 dark:bg-neutral-900 rounded-lg ${shadow_class_from_ui} poppins-font`}>
      <h2 className="text-2xl md:text-3xl mb-6 text-center text-neutral-800 dark:text-blue-400">
        Get In Touch
      </h2>
      <p
      className="text-sm text-neutral-400 dark:text-neutral-500"
      >Want to provide a feedback? or Just say hello!</p>
      
      <form onSubmit={onSubmit} className="space-y-4 mt-3">
        {/* Honeypot field - hidden from users but visible to bots */}
        <input
          ref={honeypotRef}
          type="text"
          name="website"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            disabled={isSubmitting}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white
              ${errors.name ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'}
              dark:bg-neutral-800 dark:text-white`}
            placeholder="Your name"
            maxLength={50}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            disabled={isSubmitting}
            className={`w-full text-sm md:text-lg px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white
              ${errors.email ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'}
              dark:bg-neutral-800 dark:text-white`}
            placeholder="your.email@example.com"
            maxLength={100}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            required
            disabled={isSubmitting}
            rows={5}
            className={`w-full text-sm md:text-lg  px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed resize-vertical bg-white
              ${errors.message ? 'border-red-500' : 'border-neutral-300 dark:border-neutral-600'}
              dark:bg-neutral-800 dark:text-white`}
            placeholder="Your message..."
            maxLength={1000}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition duration-200 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Processing..." : "Send Message"}
        </button>
      </form>

      {result && (
        <div className={`mt-4 p-3 rounded-md text-center ${
          result.includes("successfully") 
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
            : result.includes("Sending") || result.includes("Checking") || result.includes("Processing")
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
        }`}>
          {result}
        </div>
      )}
    </div>
  );
}