import { Avatar, Checkbox, Fieldset, ProgressBar, Tab, Tabs } from '@react95/core';

function Resume() {
  return (
    <Tabs defaultActiveTab="Genesis">
      <Tab title="Genesis">
        <h3>Behold, I am Md Mainul Islam</h3>
        <Avatar
          src="https://avatars.githubusercontent.com/mainul-16"
          alt="A portrait of the artisan"
          size="140px"
        />
        <p>A Computer Science Engineer Forging the Cloud-Native Frontier</p>
        <Fieldset legend="My Saga">
          <p>
            I am a builder of systems, a tamer of shells, and a seeker of low-level truths. Pursuing my B.Tech in Computer Science & Engineering at Brainware University, I don't just write code — I architect solutions from the ground up. From aerospace hardware labs to POSIX shells written in Go, my quest is to understand computing at its core and build things that actually work in the real world.
          </p>
        </Fieldset>
        <Fieldset legend="Contact">
          <p>📞 +91 – 9339242600</p>
          <p>✉️ mainulislam160105@gmail.com</p>
          <p>🐙 <a href="https://github.com/mainul-16" target="_blank" rel="noreferrer">github.com/mainul-16</a></p>
          <p>📍 Vidyasagar Pally, Katwa, Purba Burdwan – 713130</p>
        </Fieldset>
      </Tab>

      <Tab title="Chronicles of a Coder">
        <Fieldset legend="Education">
          <Checkbox readOnly checked>
            <strong>2023–27:</strong> B.Tech, Computer Science & Engineering — Brainware University
          </Checkbox>
          <Checkbox readOnly checked>
            <strong>2023:</strong> 12th (Senior Secondary, CBSE) — LMET International School
          </Checkbox>
          <Checkbox readOnly checked>
            <strong>2021:</strong> 10th (Secondary, CICSE) — St Joseph's English Medium School
          </Checkbox>
        </Fieldset>

        <Fieldset legend="Agnirath Aerospace Defence Research Pvt. Ltd — Hardware Integration Intern (May–Aug 2025)">
          <Checkbox readOnly checked>
            Assembled and tested hardware components, ensuring all parts fit and function securely within the system.
          </Checkbox>
          <Checkbox readOnly checked>
            Conducted basic troubleshooting and testing to verify component functionality and system performance.
          </Checkbox>
          <Checkbox readOnly checked>
            Collaborated with the technical team to improve assembly efficiency and document the build process.
          </Checkbox>
        </Fieldset>
      </Tab>

      <Tab title="Artifacts of Creation">
        <Fieldset legend="Movie Ticket Booking (Oct 2025)">
          <Checkbox readOnly checked>
            Implemented secure authentication using Clerk, integrated Stripe for payment processing, and handled asynchronous workflows using Inngest for real-time updates and background jobs.
          </Checkbox>
          <Checkbox readOnly checked>
            Deployed on Vercel with a cloud-hosted MongoDB Atlas database, following environment-based configuration and scalable backend architecture practices.
          </Checkbox>
        </Fieldset>

        <Fieldset legend="Build My Own Shell in Go (Jan 2026)">
          <Checkbox readOnly checked>
            Built a POSIX-style interactive shell in Golang with REPL, command parsing, and execution of external programs.
          </Checkbox>
          <Checkbox readOnly checked>
            Implemented built-in commands, pipelines (|), and I/O redirection ({">"}, {">>"},  2{">"}) along with persistent command history.
          </Checkbox>
          <Checkbox readOnly checked>
            Applied core OS and process management concepts using Go's os/exec and file descriptor handling; tested using Docker for consistent builds.
          </Checkbox>
        </Fieldset>
      </Tab>

      <Tab title="Arsenal of an Engineer">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Fieldset legend="Languages">
            <ul>
              <li className="resume-skills">Golang</li>
              <ProgressBar percent={75} width="200px" />
              <li className="resume-skills">Python</li>
              <ProgressBar percent={70} width="200px" />
              <li className="resume-skills">C</li>
              <ProgressBar percent={75} width="200px" />
              <li className="resume-skills">Java</li>
              <ProgressBar percent={70} width="200px" />
            </ul>
          </Fieldset>
          <Fieldset legend="Web & Database">
            <ul>
              <li className="resume-skills">JavaScript</li>
              <ProgressBar percent={78} width="200px" />
              <li className="resume-skills">HTML & CSS</li>
              <ProgressBar percent={82} width="200px" />
              <li className="resume-skills">MySQL</li>
              <ProgressBar percent={72} width="200px" />
              <li className="resume-skills">MongoDB</li>
              <ProgressBar percent={70} width="200px" />
            </ul>
          </Fieldset>
          <Fieldset legend="Tools & Platforms">
            <ul>
              <li className="resume-skills">Docker</li>
              <ProgressBar percent={75} width="200px" />
              <li className="resume-skills">Git & GitHub</li>
              <ProgressBar percent={85} width="200px" />
              <li className="resume-skills">Vercel</li>
              <ProgressBar percent={70} width="200px" />
              <li className="resume-skills">Linux / Shell</li>
              <ProgressBar percent={80} width="200px" />
            </ul>
          </Fieldset>
        </div>
      </Tab>

      <Tab title="The Soul of the Engineer">
        <Fieldset legend="Core Attributes">
          <p>
            I am a systems thinker, a relentless learner, and someone who believes in understanding how things work — not just making them work. From building shells from scratch to integrating hardware in aerospace labs, I thrive at the intersection of theory and practice. I'm driven by a desire to go deep, contribute meaningfully, and grow alongside teams that care about crafting things that last.
          </p>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}

export default Resume;