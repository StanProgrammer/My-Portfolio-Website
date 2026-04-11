"use client";

const ResumePage = () => {
  return (
    <div className="container max-w-6xl mx-auto py-20 px-4 space-y-12">

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-(--color-paper)">
          Resume
        </h1>
        <p className="text-(--color-mist) text-sm md:text-base max-w-xl mx-auto">
          View or download my resume to explore my experience, skills, and projects.
        </p>
      </div>

      {/* Viewer Wrapper (important) */}
      <div
        className="
        relative
        rounded-2xl
        p-3 md:p-6
        bg-gradient-to-b
        from-(--color-ash)/40
        to-transparent
      "
      >

        {/* Inner Frame */}
        <div
          className="
          relative
          bg-(--color-ash)
          border border-(--color-border)
          rounded-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          overflow-hidden
        "
        >

          {/* PDF */}
          <div className="w-full h-[75vh] md:h-[85vh] bg-white">
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
              className="w-full h-full"
            />
          </div>

        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

        <a
          href="/resume.pdf"
          download
          className="
            px-6 py-3 rounded-xl
            bg-(--color-gold)
            text-black font-semibold
            hover:brightness-110
            transition-all duration-300
            shadow-md hover:shadow-lg
          "
        >
          Download Resume
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 py-3 rounded-xl
            border border-(--color-border)
            text-(--color-paper)
            hover:border-(--color-gold)
            hover:text-(--color-gold)
            transition-all duration-300
          "
        >
          Open in New Tab
        </a>

      </div>

      {/* Note */}
      <p className="text-center text-xs text-(--color-mist)">
        For best experience on mobile, open in a new tab.
      </p>

    </div>
  );
};

export default ResumePage;