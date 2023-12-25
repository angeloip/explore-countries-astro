export default function Pagination() {
  return (
    <div className="flex justify-center">
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        <a
          href="#"
          className="relative items-center rounded-l-md px-2 py-2 border border-white"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <a
          href="#"
          aria-current="page"
          className="items-center px-4 py-2 text-sm font-semibold border border-white"
        >
          1
        </a>
        <a
          href="#"
          className="items-center px-4 py-2 text-sm font-semibold border border-white"
        >
          2
        </a>
        <a
          href="#"
          className="items-center px-4 py-2 text-sm font-semibold border border-white"
        >
          3
        </a>
        <span className="items-center px-4 py-2 text-sm font-semibold border border-white">
          ...
        </span>
        <a
          href="#"
          className="items-center px-4 py-2 text-sm font-semibold border border-white"
        >
          8
        </a>
        <a
          href="#"
          className="items-center px-4 py-2 text-sm font-semibold border border-white"
        >
          9
        </a>
        <a
          href="#"
          className="items-center px-4 py-2 text-sm font-semibold border border-white"
        >
          10
        </a>
        <a
          href="#"
          className="relative items-center rounded-r-md  px-2 py-2 border border-white"
        >
          <span className="sr-only">Next</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>
  )
}
