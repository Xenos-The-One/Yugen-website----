import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog'
import { site } from '../content/site'

export function BookingDialog({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] w-[95vw] max-h-[90vh] flex flex-col p-0 border-white/10 bg-[#0a0a0c] overflow-hidden shadow-[0_0_100px_rgba(45,212,191,0.3)] rounded-2xl">
        <div className="p-5 sm:p-8 pb-4 sm:pb-6 bg-gradient-to-b from-primary/15 to-transparent relative border-b border-white/5 shrink-0">
          <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-2 sm:mb-3 relative z-10">
            {'Book Your '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#06b6d4]">Strategy Call</span>
          </DialogTitle>
          <DialogDescription className="text-white/60 text-sm sm:text-lg relative z-10 max-w-xl">
            Select a time below to see exactly how we can automate your lead follow-up and help you win more business.
          </DialogDescription>
        </div>
        {site.bookingWidgetUrl ? (
          <div className="w-full h-[80vh] sm:h-[85vh] relative bg-white overflow-y-auto overflow-x-hidden rounded-b-2xl">
            <iframe
              title="Booking Calendar"
              src={site.bookingWidgetUrl}
              style={{ width: '100%', height: '100%', minHeight: '1200px', border: 'none' }}
              scrolling="yes"
            />
          </div>
        ) : (
          <div className="p-8 sm:p-12 flex flex-col items-center text-center gap-5">
            <p className="text-white/70 text-lg max-w-md">
              Online booking is coming soon. Email us and we'll get a time on the calendar within one business day.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white text-black font-bold px-8 h-14 hover:bg-white/90 transition-colors"
            >
              <Mail className="w-5 h-5" /> {site.email}
            </a>
            <Link to="/contact" className="text-primary font-bold hover:underline">
              Or visit our contact page
            </Link>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
