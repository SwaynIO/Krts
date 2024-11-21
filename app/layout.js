import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/krts.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dmSans, lora } from '@/lib/font'
export const metadata = {
    title: 'Krts. – Elegance in Mystery',
    description: 'Dive into the enigmatic world of Krts., a character defined by mystery, elegance, and masterful manipulation. Discover the layers behind the facade.'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
            <body>{children}</body>
        </html>
    )
}
