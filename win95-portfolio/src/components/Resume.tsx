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
            I am a builder of systems, a tamer of shells, and a seeker of low-level truths.
            Pursuing my B.Tech in Computer Science & Engineering at Brainware University,
            I don't just write code — I architect solutions from the ground up.
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
            2023–27: B.Tech, Computer Science & Engineering — Brainware University
          </Checkbox>
          <Checkbox readOnly checked>
            2023: 12th (CBSE) — LMET International School
          </Checkbox>
          <Checkbox readOnly checked>
            2021: 10th (CICSE) — St Joseph's English Medium School
          </Checkbox>
        </Fieldset>

        <Fieldset legend="Internship">
          <Checkbox readOnly checked>
            Assembled and tested hardware components ensuring proper functionality.
          </Checkbox>
          <Checkbox readOnly checked>
            Performed troubleshooting and verified system performance.
          </Checkbox>
          <Checkbox readOnly checked>
            Collaborated with team to improve assembly workflow.
          </Checkbox>
        </Fieldset>
      </Tab>

      <Tab title="Artifacts of Creation">
        <Fieldset legend="Movie Ticket Booking">
          <Checkbox readOnly checked>
            Built authentication system with Clerk and integrated Stripe payments.
          </Checkbox>
          <Checkbox readOnly checked>
            Deployed on Vercel with MongoDB Atlas backend.
          </Checkbox>
        </Fieldset>

        <Fieldset legend="Custom Shell in Go">
          <Checkbox readOnly checked>
            Built POSIX-style shell with command execution and parsing.
          </Checkbox>
          <Checkbox readOnly checked>
            Implemented pipes, redirection and command history.
          </Checkbox>
          <Checkbox readOnly checked>
            Used Go os/exec and Docker for testing.
          </Checkbox>
        </Fieldset>
      </Tab>

      <Tab title="Arsenal of an Engineer">
        <Fieldset legend="Languages">
          <div>Golang</div>
          <ProgressBar percent={75} width="200px" />
          <div>Python</div>
          <ProgressBar percent={70} width="200px" />
          <div>C</div>
          <ProgressBar percent={75} width="200px" />
          <div>Java</div>
          <ProgressBar percent={70} width="200px" />
        </Fieldset>

        <Fieldset legend="Web & Database">
          <div>JavaScript</div>
          <ProgressBar percent={78} width="200px" />
          <div>HTML & CSS</div>
          <ProgressBar percent={82} width="200px" />
          <div>MySQL</div>
          <ProgressBar percent={72} width="200px" />
          <div>MongoDB</div>
          <ProgressBar percent={70} width="200px" />
        </Fieldset>

        <Fieldset legend="Tools & Platforms">
          <div>Docker</div>
          <ProgressBar percent={75} width="200px" />
          <div>Git & GitHub</div>
          <ProgressBar percent={85} width="200px" />
          <div>Linux / Shell</div>
          <ProgressBar percent={80} width="200px" />
        </Fieldset>
      </Tab>

      <Tab title="The Soul of the Engineer">
        <Fieldset legend="Core Attributes">
          <p>
            I am a systems thinker, a relentless learner, and someone who believes in understanding
            how things work — not just making them work. I thrive at the intersection of theory and practice.
          </p>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}

export default Resume;