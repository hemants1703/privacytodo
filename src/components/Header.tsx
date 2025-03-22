import { LockKeyhole } from 'lucide-react';

export default function Header() {
  return (
    <div>
      <h2 className="text-4xl font-black mb-5 text-center">PrivacyTodo</h2>
      <p className="text-2xl text-blue-300 font-light tracking-wide text-center">
        Your tasks. Your privacy. Your control.
      </p>
      <div className="mt-10 text-center text-xs text-blue-500/80">
        <p className="flex items-center justify-center">
          <LockKeyhole className="w-4 h-4 text-blue-500 mr-2" />
          No tracking. No cookies. Just your tasks.
        </p>
        <p className="flex items-center justify-center mt-3">
          <LockKeyhole className="w-4 h-4 text-blue-500 mr-2" />
          Your tasks are stored locally in your browser. No data is sent to any
          server.
        </p>
      </div>
    </div>
  );
}
