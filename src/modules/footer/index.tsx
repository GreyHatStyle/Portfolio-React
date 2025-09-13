

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <div
    className="bg-neutral-100 text-sm sm:text-md pl-11 py-2 text-neutral-500 dark:bg-neutral-800"
    >
      <h1>© ManasBisht {year}. All Rights Reserved.</h1>
    </div>
  )
}

export default Footer