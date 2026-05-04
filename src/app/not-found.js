import Link from "next/link";
import { SiMaterialformkdocs } from "react-icons/si";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-300 px-4">
      <div className="text-center space-y-4 bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <div className="flex justify-center">
          <SiMaterialformkdocs className="text-5xl text-orange-300" />
        </div>
        <h2>Page Not Found! </h2>
        <p>
          If You Want to buy Different Cattle <Link className="underline" href="/">Back to Hom</Link>
        </p>
      </div>
    </div>
  );
}
