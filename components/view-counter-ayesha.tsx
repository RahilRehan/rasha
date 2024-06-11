import { kv } from "@vercel/kv"
import MyButton from "./button"

export default async function ViewCounterAyesha() {
	const viewGet = await kv.get("ayesha")

	return (
		<>
			{/* @ts-expect-error Async Server Component */}
			<MyButton name="ayesha" />
			<p className="text-sm text-gray-500">
				{Intl.NumberFormat("en-us").format(Number(viewGet))} views
			</p>
		</>
	)
}
