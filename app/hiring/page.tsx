export default function Hiring() {
  return (
    <div>
      <h1>Joining the Lab</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg">
          Thank you for your interest in joining our lab! Please read the following information 
          carefully before reaching out.
        </p>

        <h2>PhD Students</h2>
        <p>
          I am currently [hiring/not hiring] PhD students to start in Fall 2026. If you're 
          interested in applying, please apply through the official university admissions process 
          and mention my name in your application.
        </p>
        <p>
          <strong>What I look for:</strong>
        </p>
        <ul>
          <li>Strong mathematical and programming background</li>
          <li>Research experience (publications are a plus)</li>
          <li>Genuine interest in [research area]</li>
        </ul>

        <h2>Postdocs</h2>
        <p>
          I am hiring a postdoc to start [semester/year]. The position focuses on [research areas]. 
          Please send me an email with your CV, research statement, and 2-3 representative papers.
        </p>

        <h2>Undergraduate Students</h2>
        <p>
          If you're a current [University] student interested in doing research, please fill out 
          this form [link] and I'll get back to you if there's a good match.
        </p>

        <h2>Before Emailing Me</h2>
        <p>
          Please:
        </p>
        <ul>
          <li>Read at least 2-3 of our recent papers</li>
          <li>Explain why you're specifically interested in our work</li>
          <li>Include your CV and transcripts</li>
          <li>Mention specific projects you'd like to work on</li>
        </ul>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="font-semibold">Note:</p>
          <p className="mt-2">
            I receive many emails and may not be able to respond to all inquiries. If you don't 
            hear back within 2 weeks, please feel free to send a follow-up.
          </p>
        </div>
      </div>
    </div>
  );
}

