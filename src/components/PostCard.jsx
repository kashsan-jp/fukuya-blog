import Link from "next/link";

export default function PostCard({post}) {

  return (
    <>
    <div className="border border-slate-400 
        border-dashed p-4 rounded-md h-full bg-white">

        <p className="text-slate-600 text-xs">
            {post._id.getTimestamp().toLocaleString(
              "ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                hour12: false,
              }
            )}
        </p>
        <Link
            href={`/posts/show/${post._id.toString()}`} 
            className="block text-xl font-semibold mb-4 py-3"
        >
            {post.title}
        </Link>
        <p className="text-sm break-words whitespace-pre-wrap">{post.content}</p>
    </div>
    <Link href="/">
      <div className="text-center text-orange-700 mt-3">戻る</div>
    </Link>
    </>
  )
}
