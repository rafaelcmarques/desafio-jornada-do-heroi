export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-6 bg-violet-50  px-4 py-5 rounded">
      <div className="flex flex-col gap-1">
        <span className="text-violet-500 text-sm/5 font-semibold">
          Used Space
        </span>
        <p className="text-violet-500 text-sm/5">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-4/5 rounded-full bg-violet-700" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="font-semibold text-violet-500 hover:text-violet-700"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="font-semibold text-violet-700 hover:text-violet-900"
        >
          Upgrade Plan
        </button>
      </div>
    </div>
  )
}
