import { AWSIcon, ClerkIcon, CppIcon, DockerIcon, DrizzleIcon, ExpressIcon, GoIcon, JavaScriptIcon, JWTIcon, KubernetesIcon, MongoDbIcon, MySqlIcon, NeovimIcon, NextIcon, PostgresIcon, PrismaIcon, Railway, ReactIcon, RedisIcon, SupabaseIcon, TailwindIcon, TRPCicon, TypescriptIcon, VercelIcon } from "./Icons"
import { BackgroundLines } from "@/components/ui/background-lines"
import FIcon from "@/framer-motion.svg"
import Grpc from "@/Grpc.svg"
import OAuth from "@/OAuth.svg"
import Arch from "@/arch.svg"

const page = () => {
  return (
    <div className="w-screen h-[420vh] md:h-[220vh] lg:h-[200vh] bg-black">
      <BackgroundLines>
        <Stack />
      </BackgroundLines>
    </div>
  )
}
const Stack = () => {
  return (
    <div className="pl-8 sm:pl-24 md:pl-64">
      <div className=" pt-8 pb-4">
        <h1 className="text-cyan-500 text-xl font-semibold font-mono">_languages</h1>
      </div>
      <div className="flex-wrap flex gap-2">
        <Component Icon={<TypescriptIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-6 pt-3.5">Typescript</h1>}
        />
        <Component Icon={<JavaScriptIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-6 pt-3.5">JavaScript</h1>}
        />
        <Component Icon={<GoIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-16  pt-3 md:pt-3.5">Go</h1>}
        />
        <Component Icon={<CppIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-16 pt-3.5">C++</h1>} />
      </div>
      <div className=" pt-8 pb-4">
        <h1 className="text-cyan-500 text-xl font-semibold font-mono">_framework/libraries</h1>
      </div>
      <div className="flex-wrap flex gap-2">
        <Component Icon={<NextIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-9 pt-3.5">Next.js</h1>}
        />
        <Component Icon={<ExpressIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-9 pt-3.5">Express</h1>}
        />
        <Component Icon={<ReactIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-12 pt-3.5">React</h1>}
        />
        <Component Icon={<GoIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-16  pt-3 md:pt-3.5">Gin</h1>}
        />
      </div>
      <div className=" pt-8 pb-4">
        <h1 className="text-cyan-500 text-xl font-semibold font-mono">_databases </h1>
      </div>
      <div className="flex-wrap flex gap-2">
        <Component Icon={<PostgresIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-8 pt-3.5">Postgres</h1>}
        />
        <Component Icon={<MySqlIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-12 pt-3.5">MySql</h1>}
        />
        <Component Icon={<MongoDbIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-12  pt-3 md:pt-3.5">MongoDB</h1>}
        />
        <Component Icon={<SupabaseIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-10  pt-3 md:pt-3.5">Supabase</h1>}
        />
      </div>
      <div className=" pt-8 pb-4">
        <h1 className="text-cyan-500 text-xl font-semibold font-mono">_orms</h1>
      </div>
      <div className="flex-wrap flex gap-2">
        <Component Icon={<PrismaIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-14 pt-4">Prisma</h1>}
        />
        <Component Icon={<DrizzleIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-12 pt-3.5">Drizzle</h1>}
        />
      </div>

      <div className=" pt-8 pb-4">
        <h1 className="text-cyan-500 text-xl font-semibold font-mono">_frontend tools</h1>
      </div>
      <div className="flex-wrap flex gap-2">
        <Component Icon={<TailwindIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-10 pt-4">Tailwind</h1>}
        />
        <Component Icon={<div><img src={FIcon.src} className="w-10 h-10" /></div>}
          Label={<h1 className="text-black font-mono text-xl font-semibold  pt-3.5">Framer Motion</h1>}
        />
      </div>





      <div className=" pt-8 pb-4">
        <h1 className="text-cyan-500 text-xl font-semibold font-mono">_backend tools</h1>
      </div>
      <div className="flex-wrap flex gap-2">
        <Component Icon={<TRPCicon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-14 pt-3.5">tRPC</h1>}
        />
        <Component Icon={<div><img src={Grpc.src} className="w-10 h-10" /></div>}
          Label={<h1 className="text-black font-mono text-xl font-semibold  pt-3.5 pr-14">gRPC</h1>}
        />
        <Component Icon={<ReactIcon />}
          Label={<h1 className="text-black font-mono text-lg pr-1 font-semibold  pt-3.5">Server Actions</h1>}
        />
        <Component Icon={<RedisIcon />}
          Label={<h1 className="text-black font-mono text-xl pr-12 font-semibold  pt-3.5">Redis</h1>}
        />
      </div>





      <div className=" pt-8 pb-4">
        <h1 className="text-cyan-500 text-xl font-semibold font-mono">_deployments</h1>
      </div>
      <div className="flex-wrap flex gap-2">
        <Component Icon={<VercelIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-12 pt-3.5">Vercel</h1>}
        />
        <Component Icon={<AWSIcon />}
          Label={<h1 className="text-black font-mono text-xl pr-16 font-semibold  pt-3.5">AWS</h1>}
        />
        <Component Icon={<Railway />}
          Label={<h1 className="text-black font-mono text-xl pr-10 font-semibold  pt-3.5">Railway</h1>}
        />
      </div>




      <div className=" pt-8 pb-4">
        <h1 className="text-cyan-500 text-xl font-semibold font-mono">_authentication</h1>
      </div>
      <div className="flex-wrap flex gap-2">
        <Component Icon={<ClerkIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-12 pt-3.5">Clerk</h1>}
        />
        <Component Icon={<div><img src={OAuth.src} className="w-10 h-10" /></div>}
          Label={<h1 className="text-black font-mono text-xl font-semibold  pt-3.5 pr-14">OAuth2</h1>}
        />
        <Component Icon={<JWTIcon />}
          Label={<h1 className="text-black font-mono text-xl pr-16 font-semibold  pt-3.5">JWT</h1>}
        />
      </div>






      <div className=" pt-8 pb-4">
        <h1 className="text-cyan-500 text-xl font-semibold font-mono">_devOps</h1>
      </div>
      <div className="flex-wrap flex gap-2">
        <Component Icon={<DockerIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-12 pt-3.5">Docker</h1>}
        />
        <Component Icon={<KubernetesIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-6 pt-3.5">Kubernetes</h1>}
        />
      </div>



      <div className=" pt-8 pb-4">
        <h1 className="text-cyan-500 text-xl font-semibold font-mono">_os && _editor</h1>
      </div>
      <div className="flex-wrap flex gap-2">
        <Component Icon={<NeovimIcon />}
          Label={<h1 className="text-black font-mono text-xl font-semibold pr-12 pt-4">Neovim</h1>}
        />
        <Component Icon={<div><img src={Arch.src} className="w-10 h-10" /></div>}
          Label={<h1 className="text-black font-mono text-xl font-semibold  pt-4 pr-14">Arch</h1>}
        />
      </div>
    </div>
  );
}

const Component = ({ Icon, Label }: { Icon: React.ReactNode, Label: React.ReactNode }) => {
  return (
    <div className="border-1 border-white shadow-lg shadow-gray-500 w-56 flex bg-gray-300 rounded-md justify-between">
      {/* svg container */}
      <div className="bg-black m-[2px] py-2 px-3">{Icon}</div>

      {/* heading container */}
      <div>{Label}</div>
    </div>
  );
}

export default page
