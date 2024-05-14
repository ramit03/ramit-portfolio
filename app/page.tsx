import AnimatedText from "@/components/animateText";
import AppearIn from "@/components/appearHome";
import GlowButton from "@/components/ui/glowButton";
export default function Home() {
  return (
    <main className="h-screen w-full bg-black flex flex-col gap-6 text-textcol justify-center items-center">
      <AppearIn
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 100, transition: { duration: 0.8 } }}
      >
        <h1 className="font-roboto text-4xl md:text-5xl lg:text-6xl">
          Hi, I&apos;m
        </h1>
      </AppearIn>
      <AppearIn
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 100, transition: { duration: 1.2,delay:0.4 } }}
      >
        <AnimatedText
          text="Ramit"
          dataTextValue="Ramit"
          className="text-white font-roboto font-bold text-4xl md:text-5xl lg:text-6xl"
        />
      </AppearIn>
      <AppearIn
       initial={{ y: 10, opacity: 0 }}
       animate={{ y: 0, opacity: 100, transition: { duration: 1.2,delay:2.5 } }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          A frontend developer
        </h2>
      </AppearIn>
     
      <AppearIn 
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 100, transition: { duration: 1.5,delay:3.2 } }}
      className="absolute bottom-5 sm:w-[40%] lg:w-[20%]">
        <GlowButton route="main" buttonText="Dive In" />
      </AppearIn>
    </main>
  );
}
