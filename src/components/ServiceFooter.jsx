import { useEffect, useState } from 'react'

function ServiceFooter() {
    return (
        
        <footer className="service-footer">
        
            <div className="serviceFooterContent">
                <h3>Contact Us</h3>

                <p>
                    Email:
                <a
                    href="mailto:hairhaven@gmail.com"
                    className="serviceFooterLink"
                >
                    hairhaven@gmail.com
                </a>
                </p>

                <p>
                Phone Number: 111-111-1111 
                </p>
            

                <p>Location: 123 Street Avenue, Ottawa, Canada, A1B 2C3</p>


                <p className="copyright">
                    Designed by Rachel Luo 
                </p>
            </div>
        </footer>
    )
}

export default ServiceFooter