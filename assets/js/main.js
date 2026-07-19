/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Fix: Flexbox min-height bug on IE.
		if (browser.name == 'ie') {

			var flexboxFixTimeoutId;

			$window.on('resize.flexbox-fix', function() {

				clearTimeout(flexboxFixTimeoutId);

				flexboxFixTimeoutId = setTimeout(function() {

					if ($wrapper.prop('scrollHeight') > $window.height())
						$wrapper.css('height', 'auto');
					else
						$wrapper.css('height', '100vh');

				}, 250);

			}).triggerHandler('resize.flexbox-fix');

		}

	// Nav.
		var $nav = $header.children('nav'),
			$nav_li = $nav.find('li');

		// Add "middle" alignment classes if we're dealing with an even number of items.
			if ($nav_li.length % 2 == 0) {

				$nav.addClass('use-middle');
				$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');

			}

	// Main.
		var	delay = 325,
			locked = false;

		// Methods.
			$main._show = function(id, initial) {

				var $article = $main_articles.filter('#' + id);

				// No such article? Bail.
					if ($article.length == 0)
						return;

				// Handle lock.

					// Already locked? Speed through "show" steps w/o delays.
						if (locked || (typeof initial != 'undefined' && initial === true)) {

							// Mark as switching.
								$body.addClass('is-switching');

							// Mark as visible.
								$body.addClass('is-article-visible');

							// Deactivate all articles (just in case one's already active).
								$main_articles.removeClass('active');

							// Hide header, footer.
								$header.hide();
								$footer.hide();

							// Show main, article.
								$main.show();
								$article.show();

							// Activate article.
								$article.addClass('active');

							// Unlock.
								locked = false;

							// Unmark as switching.
								setTimeout(function() {
									$body.removeClass('is-switching');
								}, (initial ? 1000 : 0));

							return;

						}

					// Lock.
						locked = true;

				// Article already visible? Just swap articles.
					if ($body.hasClass('is-article-visible')) {

						// Deactivate current article.
							var $currentArticle = $main_articles.filter('.active');

							$currentArticle.removeClass('active');

						// Show article.
							setTimeout(function() {

								// Hide current article.
									$currentArticle.hide();

								// Show article.
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

				// Otherwise, handle as normal.
					else {

						// Mark as visible.
							$body
								.addClass('is-article-visible');

						// Show article.
							setTimeout(function() {

								// Hide header, footer.
									$header.hide();
									$footer.hide();

								// Show main, article.
									$main.show();
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

			};

			$main._hide = function(addState) {

				var $article = $main_articles.filter('.active');

				// Article not visible? Bail.
					if (!$body.hasClass('is-article-visible'))
						return;

				// Add state?
					if (typeof addState != 'undefined'
					&&	addState === true)
						history.pushState(null, null, '#');

				// Handle lock.

					// Already locked? Speed through "hide" steps w/o delays.
						if (locked) {

							// Mark as switching.
								$body.addClass('is-switching');

							// Deactivate article.
								$article.removeClass('active');

							// Hide article, main.
								$article.hide();
								$main.hide();

							// Show footer, header.
								$footer.show();
								$header.show();

							// Unmark as visible.
								$body.removeClass('is-article-visible');

							// Unlock.
								locked = false;

							// Unmark as switching.
								$body.removeClass('is-switching');

							// Window stuff.
								$window
									.scrollTop(0)
									.triggerHandler('resize.flexbox-fix');

							return;

						}

					// Lock.
						locked = true;

				// Deactivate article.
					$article.removeClass('active');

				// Hide article.
					setTimeout(function() {

						// Hide article, main.
							$article.hide();
							$main.hide();

						// Show footer, header.
							$footer.show();
							$header.show();

						// Unmark as visible.
							setTimeout(function() {

								$body.removeClass('is-article-visible');

								// Window stuff.
									$window
										.scrollTop(0)
										.triggerHandler('resize.flexbox-fix');

								// Unlock.
									setTimeout(function() {
										locked = false;
									}, delay);

							}, 25);

					}, delay);


			};

// Articles and overlay navigation are disabled for the natural scroll portfolio.
		// Articles.
			$main_articles.each(function() {

				var $this = $(this);

				// Close.
					$('<div class="close">Close</div>')
						.appendTo($this)
						.on('click', function() {
							location.hash = '';
						});

				// Prevent clicks from bubbling.
					$this.on('click', function(event) {
						event.stopPropagation();
					});

			});

		// Events.
			$body.on('click', function() {

				// Article visible? Hide.
					if ($body.hasClass('is-article-visible'))
						$main._hide(true);

			});

			$window.on('keyup', function(event) {

	// Do not close the project article while the lightbox is open.
	if ($imageLightbox && $imageLightbox.hasClass('open'))
		return;

	switch (event.keyCode) {

		case 27:

			if ($body.hasClass('is-article-visible'))
				$main._hide(true);

			break;

		default:
			break;
	}
});

			$window.on('hashchange', function(event) {

				// Empty hash?
					if (location.hash == ''
					||	location.hash == '#') {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Hide.
							$main._hide();

					}

				// Otherwise, show article.
					else if ($main_articles.filter(location.hash).length > 0) {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Show article.
							$main._show(location.hash.substr(1));

					}

			});

		// Scroll restoration.
			if ('scrollRestoration' in history)
				history.scrollRestoration = 'manual';
			else {

				var oldScrollPos = 0,
					scrollPos = 0,
					$htmlbody = $('html,body');

				$window
					.on('scroll', function() {

						oldScrollPos = scrollPos;
						scrollPos = $htmlbody.scrollTop();

					})
					.on('hashchange', function() {
						$window.scrollTop(oldScrollPos);
					});

			}

		// Initialize.

			// Hide main and articles.
				$main.hide();
				$main_articles.hide();

			// Initial article.
				if (location.hash != ''
				&&	location.hash != '#')
					$window.on('load', function() {
						$main._show(location.hash.substr(1), true);
					});
							// =========================================
	// Fullscreen image lightbox gallery
	// =========================================

	var $imageLightbox = $('#image-lightbox'),
		$imageLightboxImage = $imageLightbox.find('.image-lightbox-content'),
		$imageLightboxClose = $imageLightbox.find('.image-lightbox-close'),
		$imageLightboxPrevious = $imageLightbox.find('.image-lightbox-previous'),
		$imageLightboxNext = $imageLightbox.find('.image-lightbox-next'),
		$imageLightboxCounter = $imageLightbox.find('.image-lightbox-counter'),
		$lightboxLinks = $(),
        currentLightboxIndex = 0;

	function updateLightboxImage() {

		var $currentLink = $lightboxLinks.eq(currentLightboxIndex),
			$currentImage = $currentLink.find('img');

		$imageLightboxImage.attr({
			src: $currentLink.attr('href'),
			alt: $currentImage.attr('alt') || 'Fullscreen project screenshot'
		});

		$imageLightboxCounter.text(
			(currentLightboxIndex + 1) + ' / ' + $lightboxLinks.length
		);

	}

	function openImageLightbox(index) {

		currentLightboxIndex = index;

		updateLightboxImage();

		$imageLightbox
			.addClass('open')
			.attr('aria-hidden', 'false');

		$body.addClass('lightbox-open');

	}

	function closeImageLightbox() {

		$imageLightbox
			.removeClass('open')
			.attr('aria-hidden', 'true');

		$body.removeClass('lightbox-open');

		$imageLightboxImage.attr({
			src: '',
			alt: ''
		});

	}

	function showPreviousLightboxImage() {

		currentLightboxIndex--;

		if (currentLightboxIndex < 0)
			currentLightboxIndex = $lightboxLinks.length - 1;

		updateLightboxImage();

	}

	function showNextLightboxImage() {

		currentLightboxIndex++;

		if (currentLightboxIndex >= $lightboxLinks.length)
			currentLightboxIndex = 0;

		updateLightboxImage();

	}

		// Open a selected image and build its project-specific gallery.
	document.addEventListener('click', function(event) {

		var lightboxLink = event.target.closest('a.lightbox-image');

		if (!lightboxLink)
			return;

		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		var groupName = lightboxLink.getAttribute('data-lightbox-group');

		if (groupName) {

			$lightboxLinks = $(
				'a.lightbox-image[data-lightbox-group="' + groupName + '"]'
			);

		}
		else {

			// An ungrouped image opens by itself.
			$lightboxLinks = $(lightboxLink);

		}

		var selectedIndex = $lightboxLinks.index(lightboxLink);

		if (selectedIndex !== -1)
			openImageLightbox(selectedIndex);

	}, true);

	// Close button.
	$imageLightboxClose.on('click', function(event) {

		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		closeImageLightbox();

		return false;

	});

	// Previous button.
	$imageLightboxPrevious.on('click', function(event) {

		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		showPreviousLightboxImage();

		return false;

	});

	// Next button.
	$imageLightboxNext.on('click', function(event) {

		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		showNextLightboxImage();

		return false;

	});

	// Clicking the image itself does nothing.
	$imageLightboxImage.on('click', function(event) {

		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

	});

	// Close when clicking only the dark background.
	$imageLightbox.on('click', function(event) {

		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();

		if (event.target === this)
			closeImageLightbox();

	});

	// Keyboard controls.
	document.addEventListener('keyup', function(event) {

		if (!$imageLightbox.hasClass('open'))
			return;

		switch (event.key) {

			case 'Escape':
				event.preventDefault();
				event.stopPropagation();
				event.stopImmediatePropagation();

				closeImageLightbox();
				break;

			case 'ArrowLeft':
				event.preventDefault();
				event.stopPropagation();
				event.stopImmediatePropagation();

				showPreviousLightboxImage();
				break;

			case 'ArrowRight':
				event.preventDefault();
				event.stopPropagation();
				event.stopImmediatePropagation();

				showNextLightboxImage();
				break;

		}

	}, true);
})(jQuery);