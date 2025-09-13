import axios from "axios";

const apiClient = axios.create({
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});


export const checkSpam = async (text: string): Promise<boolean> => {

    const fallbackSpamCheck = (text: string): boolean => {
        const spamPatterns = [
        /https?:\/\//gi, // URLs
        /\b(?:click here|free|winner|congratulations|lottery|prize)\b/gi,
        /(.)\1{10,}/gi, // Repeated characters
        /[A-Z]{20,}/gi, // Too many uppercase letters
        ];

        return spamPatterns.some(pattern => pattern.test(text));
    };

    try {
      const response = await apiClient.post('https://manasbisht.tech/ml/spam', {
        text: text
      });

      if (response.data?.status === "success") {
        return response.data.message?.toLowerCase() === "spam";
      }
      
      return false;
    }
    
    catch (error) {
      // If API fails, use fallback spam detection
      console.warn("Spam API unavailable, using fallback detection:", error);
      return fallbackSpamCheck(text);
    }
  };


