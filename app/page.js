import ChatInputBox from "./_components/ChatInputBox";


export default function Home() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background image absolutely positioned behind the chatbox */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/bg-img.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        }}
        aria-hidden="true"
      />
      {/* ChatInputBox sits above the background */}
      <div className="relative z-10">
        <ChatInputBox />
      </div>
    </div>
  );
}
