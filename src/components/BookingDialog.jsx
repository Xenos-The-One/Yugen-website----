import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog'
import { BookingPanel } from './BookingPanel'

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
            Select a time below to see exactly how we can get you found, capture more leads and help you win more business.
          </DialogDescription>
        </div>
        <div className="overflow-y-auto">
          <BookingPanel frameClassName="h-[70vh] rounded-b-2xl" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
