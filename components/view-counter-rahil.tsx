import { kv } from "@vercel/kv"
import MyButton from "./button"

export default async function ViewCounterRahil() {
	const viewGet = await kv.get("rahil")

	return (
		<>
			{/* @ts-expect-error Async Server Component */}
			<MyButton name="rahil" />
			<p className="text-sm text-gray-500">
				{Intl.NumberFormat("en-us").format(Number(viewGet))} views
			</p>
		</>
	)
}
