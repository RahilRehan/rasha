import ViewCounterAyesha from "@/components/view-counter-ayesha"
import ViewCounterRahil from "@/components/view-counter-rahil"

export const dynamic = "force-dynamic"

export default function Home() {
	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center">
			<h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
				Rahil{" "}
				<span className="pt-4 pb-8 bg-gradient-to-br from-red-500 via-red-500 to-red-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
					❤️
				</span>{" "}
				Ayesha
			</h1>
			<div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
				<div className="flex justify-between items-center mb-4">
					<div className="space-y-1">
						<h2 className="text-xl font-semibold">Rahil:</h2>
					</div>
					{/* @ts-expect-error Async Server Component */}
					<ViewCounterRahil />
				</div>
				<div className="flex justify-between items-center mb-4">
					<div className="space-y-1">
						<h2 className="text-xl font-semibold">Ayesha:</h2>
					</div>
					{/* @ts-expect-error Async Server Component */}
					<ViewCounterAyesha />
				</div>
			</div>
			<div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between"></div>
		</main>
	)
}
