import { useEffect, useState } from 'react'

function Footer() {
    const [time, setTime] = useState('')

    useEffect(() => {

        const interval = setInterval(() => {

            const currentTime =
                new Date().toLocaleTimeString(
                'en-CA',
                {
                    timeZone: 'America/Toronto',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                }
                )

            setTime(currentTime)

        }, 1000)

        return () => clearInterval(interval)

    }, [])
 
    return (
        
        <footer className="footer">
        
            <div className="footerContent">
                <h3>Rachel Luo</h3>

                <p>
                    Email:
                <a
                    href="mailto:rachel.luo887@gmail.com"
                    className="footerLink"
                >
                    rachel.luo887@gmail.com
                </a>
                </p>

                <p>
                LinkedIn:
                <a
                    href="https://www.linkedin.com/in/luorachel/"
                    className="footerLink"
                >
                    linkedin.com/in/luorachel
                </a>
                </p>
            

                <p>Location: Toronto/Ottawa, Canada</p>
                

                <p className="clockText">
                    Current Time (EST): {time}
                </p>


                <p className="copyright">
                    © 2026 Rachel Luo. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer