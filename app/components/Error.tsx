import { CircleX } from "lucide-react";
import Button from "./Button";


export default function Error() {

 
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <CircleX className="h-20 w-20 text-blue"/>
      <h2 className="text-center font-din">Something went wrong!</h2>
      {/* <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        // onClick={
        //   // Attempt to recover by trying to re-render the invoices route
        //   () => reset()
        // }
      >
        Try again
      </button> */}
      <Button label={"Try Again"} link="/category" type="primary" />
    </main>
  );
}