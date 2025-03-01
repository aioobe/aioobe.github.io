---
layout: default
modification_time: "jan 15, 2025"

# To uniquely identify this page in index.html
is_resume_page: true
---

Summary
-------
Accomplished software engineer with 25+ years of experience spanning academia, startups, and global tech companies. Proven expertise in backend and frontend development, runtime verification, and constraint-solving. Skilled in delivering mission-critical solutions, leading cross-functional teams, and developing innovative tools used globally.

Education
---------
<span class="dateLabel">2007–2013</span>
**Ph.D. Theoretical Computer Science**, _Formal Methods / Runtime Verification_<br />
Royal Institute of Technology (KTH), Stockholm

<span class="dateLabel">2002–2007</span>
**M.Sc. Computer Science**, _Formal Design Techniques_<br />
Royal Institute of Technology (KTH), Stockholm

<span class="dateLabel">1990–2002</span>
**Primary / Upper Secondary School**, _Natural Science Program_<br />
Tensta Gymnasium, Stockholm

Work Experience
---------
<span class="dateLabel">2024--present</span>**PM / Developer**, _Meitner AB_<br />
Responsible for Meitner Schema, which is a web application for generation of school schedules. I wear many hats: PM, customer support, sale support, and lead dev. Tech includes constraint-solving, webbackend written in Java, and frontend written in TypeScript / React.

<span class="dateLabel">2023--present</span>**Founder**, _Aioobe Software AB_<br />
Developed _Plan A_, a constraint-solving web application for school scheduling. Later acquired by Meitner and rebranded as Meitner Schema mentioned above.

<span class="dateLabel">2016--present</span>**Forward Deployed Engineer**, _Palantir Technologies_<br />
Delivered mission-critical software adaptations across various sectors, including defense and public safety. Apart from technical responsibillities such as installation and management of operating system, databases and Palantir software, work included developing new functionality and leading a team of five engineers.

<span class="dateLabel">2013--2016</span>**Senior Member of Technical Staff**, _Oracle_<br />
Member of the Langtools team which is responsible for tools such as javac, javap, javah and javadoc as well as parts of the core API. My work has mainly been focused on javac and a wrapper for javac called sjavac which adds support for incremental and parallel compilation.

<span class="dateLabel">2011--2014</span>**Co-founder / Backend Dev**, _Comparific_<br />
Back-end developer for the Android application _Comparific_ which is used to find the best cell-phone price plans based on call history, texts and data usage. Currently analyzes over 200 price plans and add-ons. Challenges include combinatorial explosion of add-on combinations and designing the code to be simple and easy to maintain while still being able to handle all the different price plan variants (contracts, prepaid, pay as you go etc).

<span class="dateLabel">2008--present</span>**Founder**, _Aioobe Software_<br />
Built a custom CMS for a careers fair using Scala and LiftWeb. Features included invoice generation, host/exhibitor pairing and scheduling of exhibitor/student conversations. Have also developed a webshop for jewelry business and done some consulting (C++, Drupal and WordPress development).

<span class="dateLabel">2007--2013</span>**Researcher**, _Royal Institute of Technology, KTH_<br />
Scientific research in fields of software security, runtime monitoring, binary rewriting, proof carrying code, concurrency, the Java memory model and distributed systems.

Taught courses such as automata theory, program semantics and analysis, logics, algorithms and data structures, complexity theory, program construction in C++, advanced algorithms, software development techniques.

Was responsible for introducing and taking care of newly employed researchers.

Primary advisor of three master's theses: _ADAPT: Automatically Distributed Anonymous Proxy Torrent_, _Monitor Inlining in ABS_ and _TaintDroid-Integrated Policy Inliner_.

<span class="dateLabel">2003-2006</span>**Programmer**, _SAAB Technologies, Electronic Warfare Systems Division_<br />
Work included implementation of automatic tests and software development for anti-radar systems. Participated in meetings with the Italian Air force in Pratica de Mare, Italy.

Honors and Awards
-----------------
**Best of Tutors.com 2020**:  Chosen as a Top 10 tutor at tutors.com.

**30under30 Contest of 2014**: Selected as one of Swedens top 30 tech executors / top 10 developers under the age of 30.

**The Dragon of Enlightenment**: Awarded for meritorious work in undergraduate education during 2011.
  
**Honor Grant**: Awarded to best M.Sc. student among Computer Science graduates of 2007 at Royal Institute of Technology, KTH.

Achievements
------------
**Graduation Analyzer**. Developed software for analyzing student grades and graduation constraints at KTH. It aggregated information from several data sources, analyzed it and produced Excel reports. The software cut down time consuming administrative tasks by orders of magnitude. It was later adopted by other institutions and is still used on a daily basis.

**Multri.Net**, a multiplayer Tetris game featuring team play, several play modes, online replays, an integrated tournament system, multiple high score lists and an Elo rating system. The server solves many challenging problems such as cheat prevention and client synchronization with minimal latency. (Java, 28 kloc)

<!-- **No Combat Fatigue**, a real time strategy game with classical objectives such as mining resources, building bases, producing units and combat. Uses the DirectX API and implements an A* path finding algorithm with path caching and a basic AI. Written in C++ at the age of 18. -->

**Contributions at StackOverflow.com**. Contributed with over 3.000 answers in the _Java_, _C++_, _Android_, _Regex_, _algorithms_ and _multithreading_ tags since 2010. With a current rating of 242k, I belong to the top 100 (top 0.01%) users.

**StackRating.com**, a Elo based rating system for Stack Overflow users. Features include live monitoring of new posts through the StackExchange REST API and an a custom in-memory data model for fast page generation.

**Best student** in the course _Problem Solving and Programming under Pressure_.

Technical skills
----------------
Used various Linux distributions almost exclusively for the past 20 years. Both privately and professionally, and both online and air gapped. Know all the ins and outs of the Java language and the core API. Also proficient with JavaScript, TypeScript, shell scripting, C/C++, Scala, Python, Prolog, Matlab, PHP, CSS and SQL, Gradle, npm/yarn and Maven. I use Docker for all my private projects.

Above all, always eager to pick up a book and learn something new.

Interests
---------
Spending time with my wife and children, organizing and going to programming meetups, programming puzzles and participating in programming contests, both as a competitor and problem author. Was head coach for my daughters soccer team and assistant coach in a local Judo club. Practice juggling, long distance running and swimming.

Scientific Publications
-----------------------
{% for p in site.pages %}{% if p.is_publications_page %}
    {% for pub in p.publications %}
<div style="margin: 1em 0em">
    <span style="font-style: italic">{{ pub.title }}</span><br />
    <ul class="commaseplist">
        {% for author in pub.authors %}
            <li style="white-space: nowrap">{{ author }}</li>
        {% endfor %}
    </ul>
    ({{ pub.whatWhere }})
</div>
{% endfor %}
{% break %}{% endif %}{% endfor %}

References
----------
Available upon request.
