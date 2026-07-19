from pathlib import Path
content = '''<!DOCTYPE HTML>
<!--
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Jack Forfar | Games Portfolio</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Header -->
					<header id="header">
						<div class="logo">
							<span class="icon fa-gamepad"></span>
						</div>
						<div class="content">
							<div class="inner">
								<h1>Jack Forfar</h1>
								<p>Indie game developer, interactive storyteller and level designer.<br />
								Showcasing playable prototypes, polished releases and tools built for fun.</p>
							</div>
						</div>
						<nav>
							<ul>
								<li><a href="#intro">Intro</a></li>
								<li><a href="#work">Games</a></li>
								<li><a href="#about">About</a></li>
								<li><a href="#contact">Contact</a></li>
							</ul>
						</nav>
					</header>

				<!-- Main -->
					<div id="main">

						<!-- Intro -->
							<article id="intro">
								<h2 class="major">Intro</h2>
								<span class="image main"><img src="images/pic01.jpg" alt="Screenshot of game project" /></span>
								<p>I build immersive game experiences with Unity, Godot and pixel art systems. This portfolio highlights playable prototypes, polished releases and tools built for rapid iteration.</p>
								<p>From action-platformers to narrative experiments, I focus on strong core loops, responsive controls and memorable worlds. Explore featured projects, systems work and collaboration-ready demos.</p>
							</article>

						<!-- Work -->
							<article id="work">
								<h2 class="major">Games</h2>
								<span class="image main"><img src="images/pic02.jpg" alt="Gameplay screenshot" /></span>
								<p><strong>Echo Drift</strong> — Rhythm-driven exploration with reactive lighting and branching paths. Built in Godot with a focus on tight movement and immersive audio feedback.</p>
								<p><strong>Neon Runner</strong> — Fast-paced platformer with challenge rooms, polished jump mechanics and synthwave visuals. Designed for quick runs, high-score play and responsive controls.</p>
								<p><strong>Prototype Toolkit</strong> — Custom editor tools for rapid iteration: level editor, dialogue sequencer and balance dashboard. Used across game jams and early playable prototypes.</p>
							</article>

						<!-- About -->
							<article id="about">
								<h2 class="major">About</h2>
								<span class="image main"><img src="images/pic03.jpg" alt="Developer portrait or workspace" /></span>
								<p>I’m a game developer who loves building systems that feel good to play. My work blends tight controls, refined visuals and modular tools to iterate quickly on gameplay ideas.</p>
								<p>Key skills include gameplay programming, level design, UX tuning, shader polish and production-ready prototype tooling. I ship complete builds, reusable editors and playable demos.</p>
								<ul class="icons">
									<li><span class="icon solid fa-code"></span> Gameplay systems</li>
									<li><span class="icon solid fa-puzzle-piece"></span> Level design</li>
									<li><span class="icon solid fa-cogs"></span> Tools & workflows</li>
								</ul>
							</article>

						<!-- Contact -->
							<article id="contact">
								<h2 class="major">Contact</h2>
								<form method="post" action="#">
									<div class="fields">
										<div class="field half">
											<label for="name">Name</label>
											<input type="text" name="name" id="name" />
										</div>
										<div class="field half">
											<label for="email">Email</label>
											<input type="text" name="email" id="email" />
										</div>
										<div class="field">
											<label for="message">Message</label>
											<textarea name="message" id="message" rows="4"></textarea>
										</div>
									</div>
									<ul class="actions">
										<li><input type="submit" value="Send Message" class="primary" /></li>
										<li><input type="reset" value="Reset" /></li>
									</ul>
								</form>
								<ul class="icons">
									<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
									<li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
									<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
								</ul>
							</article>

					</div>

				<!-- Footer -->
					<footer id="footer">
						<p class="copyright">&copy; 2026 Jack Forfar. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
					</footer>

			</div>

			<!-- BG -->
				<div id="bg"></div>

			<!-- Scripts -->
				<script src="assets/js/jquery.min.js"></script>
				<script src="assets/js/browser.min.js"></script>
				<script src="assets/js/breakpoints.min.js"></script>
				<script src="assets/js/main.js"></script>

	</body>
</html>
'''
Path('index.html').write_text(content, encoding='utf-8')
print('index.html rewritten successfully')
