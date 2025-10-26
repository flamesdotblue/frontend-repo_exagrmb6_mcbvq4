import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-slate-900">Titan Global Consultants</p>
            <p className="text-xs text-slate-600">Clarity • Accuracy • Automation • Trust</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-md p-2 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="rounded-md p-2 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50"><Twitter className="h-5 w-5" /></a>
            <a href="mailto:hello@titanglobal.co" className="rounded-md p-2 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Titan Global Consultants. All rights reserved.</p>
      </div>
    </footer>
  );
}
