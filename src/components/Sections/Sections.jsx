import "./Sections.scss";

function Sections() {
    return (
        <>
            <section className="hero" >
                <h3 className="hero_subheading">Hello! I'm</h3>
                <h1 className="hero_heading">Timothy Patawaran</h1>
                <h2 className="hero_statement">IT Student on a mission</h2>
            </section>
            <section id="About" className="About">
                <h2 className="section_title">About</h2>
                <p className="section_information">
                    Bachelor of Technology fourth year student with six years of experience in sales and customer service. An exceptional listener and effective communicator in verbal and written language. Excellent analytical, time management and problem-solving skills. Highly organized with the ability to manage multiple projects and consistently meet deadlines.
                </p>
            </section>
            <section id="Education" className="Education">
                <h2 className="section_title">Education</h2>
                <div className="section_information">
                    <h4 className="section_list_title">Kwantlen Polytechnic University | Bachelor of Technology | September 2019 - Present</h4>
                    <p className="section_information">
                        Attained and maintained a place on the Dean’s Honor Roll, with a current cumulative GPA of 3.80. Learned how to configure switches and end devices to provide access to local and remote network devices which allowed me to obtain a certified completion of CCNAv7. Studied principles such as operating system architecture, input/output systems, file systems, and process management. Planned information systems and learned how to design corporate information technology architectures with a focus on the global economy
                    </p>
                </div>
            </section>
            <section id="Technical_Skills" className="Technical_Skills">
                <h2 className="section_title">Technical Skills</h2>
                <ul className="section_information">
                    <li className="section_information">Extensive knowledge with the Software Development Life Cycle and Project Management process</li>
                    <li className="section_information">Excellent troubleshooting skills and able to resolve unfamiliar issues through research</li>
                    <li className="section_information">Programming Languages: C++, Java, HTML, CSS, Python, PHP, SQL</li>
                    <li className="section_information">Operating Systems: Windows, MacOS, Linux</li>
                    <li className="section_information">Software: Microsoft 365, Google Drive, iCloud, Oracle VM VirtualBox, Packet Tracer, Wireshark</li>
                </ul>
            </section>
            <section id="Work_Experience" className="Work_Experience">
                <h2 className="section_title">Work Experience</h2>
                <div className="section_information">
                    <h4 className="section_list_title">Junior Network & I.T Technician (Co-op) | Delta Police Department | September 2023 – Present</h4>
                    <ul className="section_list">
                        <li className="section_list_item">Collaborated in the creation of the organization’s SharePoint site, enhancing communication and information sharing among team members</li>
                        <li className="section_list_item">Provided daily user and desktop support, resolving issues promptly and efficiently</li>
                        <li className="section_list_item">Developed and implemented various Microsoft Power Automations to streamline processes and increase efficiency across different dep</li>artments
                        <li className="section_list_item">Supported local Community Police Offices by managing their phones and computers while addressing technical concerns</li>
                        <li className="section_list_item">Assisted the Network Administrator with server support and administration tasks, contributing to network stability</li>
                        <li className="section_list_item">Efficiently installed, troubleshooted, and supported Mobile Data Terminals, ensuring seamless operation</li>
                    </ul>

                    <h4 className="section_list_title">Deployment Technician (Co-op) | Microserve | January 2022 - September 2022</h4>
                    <ul className="section_list">
                        <li className="section_list_item">Efficiently supported IT hardware and software at various client sites, including, Fraser Health Authority, WorkSafeBC, Provincial Health Services Authority, Vancouver Island Health Authority, and Interior Health Authority</li>
                        <li className="section_list_item">Effectively configured hardware, software, and networks, while troubleshooting any problems in a team environment</li>
                        <li className="section_list_item">Provided on-site client training for newly deployed hardware and software environments</li>
                        <li className="section_list_item">Responded to end-user inquiries and provided technical support to clients</li>
                        <li className="section_list_item">Accurately trained and guided new employees following company protocols</li>
                    </ul>

                    <h4 className="section_list_title">Retail Sales Associate | October’s Very Own | September 2022 – September 2023</h4>
                    <ul className="section_list">
                        <li className="section_list_item">Delivered consistently exceptional customer service, resulting in a high rate of customer satisfaction and a significant increase in returning customers</li>
                        <li className="section_list_item">Efficiently worked under pressure while understaffed by 60% for the months of May and June</li>
                        <li className="section_list_item">Organized the storage room, resulting in increased efficiency and ease of access for employees</li>
                        <li className="section_list_item">Resolved customer complaints while completing tasks assigned by my supervisors</li>
                    </ul>

                    <h4 className="section_list_title">Retail Sales Associate | Nike Factory Store | March 2020 – June 2022</h4>
                    <ul className="section_list">
                        <li className="section_list_item">Efficiently worked under pressure while understaffed</li>
                        <li className="section_list_item">Accurately promoted special using sales skills to increase averages sales per unit</li>
                        <li className="section_list_item">Developed many new tangible skills, alongside countless soft skills while interacting with customers, co-workers, and managers</li>
                        <li className="section_list_item">Received 10 positive surveys from customers over a 2-month span and won MVP of the year award</li>
                    </ul>

                    <h4 className="section_list_title">Assistant Team Leader (Key Holder) | Dollarama | August 2017 – August 2020</h4>
                    <ul className="section_list">
                        <li className="section_list_item">Effectively stayed organized under pressure in a fast-paced environment</li>
                        <li className="section_list_item">Handled conflicts, resolved problems, and provided customer service while effectively communicating with customers</li>
                        <li className="section_list_item">Managed and organized 8 carts of inventory so they could be merchandised and displayed to customers efficiently under tight deadlines</li>
                        <li className="section_list_item">Motivated co-workers by encouraging teamwork, rewarding positive behavior, and promoting optimism</li>
                    </ul>
                </div>
            </section>
            <section id="Contact" className="Contact">
                <a href="mailto:tpatawaran@outlook.com" className="contact_button">Contact Me!</a>
            </section>
        </>
    )
}

export default Sections;