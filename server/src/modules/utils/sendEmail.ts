import nodemailer from 'nodemailer';

export const sendEmail = async (email: string, name: string, url: string) => {
	const testAccount = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		secure: false,
		auth: {
			user: testAccount.user,
			pass: testAccount.pass,
		},
	});

	let template = {
		from: 'quizshare@gmail.com',
		to: email,
		subject: 'Confirmation',
		text: `Hello ${name}`,
		html: `<!DOCTYPE html>
					<html lang="en">
					<head>
						<meta charset="UTF-8">
						<meta name="viewport" content="width=device-width, initial-scale=1.0">
						<title>QuizShare Confirmation</title>
						<link rel="preconnect" href="https://fonts.gstatic.com">
						<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
						<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
					</head>
					<style>
					/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

					/*
					Document
					========
					*/

					/**
					Use a better box model (opinionated).
					*/

					*,
					*::before,
					*::after {
						box-sizing: border-box;
					}

					/**
					Use a more readable tab size (opinionated).
					*/

					:root {
						-moz-tab-size: 4;
						-o-tab-size: 4;
						tab-size: 4;
					}

					/**
					1. Correct the line height in all browsers.
					2. Prevent adjustments of font size after orientation changes in iOS.
					*/

					html {
						line-height: 1.15; /* 1 */
						-webkit-text-size-adjust: 100%; /* 2 */
					}

					body {
						margin: 0;
					}

					body {
						font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
							sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
					}

					hr {
						height: 0; /* 1 */
						color: inherit; /* 2 */
					}

					abbr[title] {
						-webkit-text-decoration: underline dotted;
						text-decoration: underline dotted;
					}

					b,
					strong {
						font-weight: bolder;
					}

					code,
					kbd,
					samp,
					pre {
						font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo,
							monospace; /* 1 */
						font-size: 1em; /* 2 */
					}

					small {
						font-size: 80%;
					}

					sub,
					sup {
						font-size: 75%;
						line-height: 0;
						position: relative;
						vertical-align: baseline;
					}

					sub {
						bottom: -0.25em;
					}

					sup {
						top: -0.5em;
					}

					table {
						text-indent: 0; /* 1 */
						border-color: inherit; /* 2 */
					}

					button,
					input,
					optgroup,
					select,
					textarea {
						font-family: inherit; /* 1 */
						font-size: 100%; /* 1 */
						line-height: 1.15; /* 1 */
						margin: 0; /* 2 */
					}

					button,
					select {
						/* 1 */
						text-transform: none;
					}

					button,
					[type='button'] {
						-webkit-appearance: button;
					}

					legend {
						padding: 0;
					}

					progress {
						vertical-align: baseline;
					}

					summary {
						display: list-item;
					}

					blockquote,
					dl,
					dd,
					h1,
					h2,
					h3,
					h4,
					h5,
					h6,
					hr,
					figure,
					p,
					pre {
						margin: 0;
					}

					button {
						background-color: transparent;
						background-image: none;
					}

					button:focus {
						outline: 1px dotted;
						outline: 5px auto -webkit-focus-ring-color;
					}

					fieldset {
						margin: 0;
						padding: 0;
					}

					ol,
					ul {
						list-style: none;
						margin: 0;
						padding: 0;
					}

					html {
						font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
							'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
							'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; /* 1 */
						line-height: 1.5; /* 2 */
					}

					body {
						font-family: inherit;
						line-height: inherit;
					}

					*,
					::before,
					::after {
						box-sizing: border-box; /* 1 */
						border-width: 0; /* 2 */
						border-style: solid; /* 2 */
						border-color: #e5e7eb; /* 2 */
					}

					hr {
						border-top-width: 1px;
					}

					img {
						border-style: solid;
					}

					textarea {
						resize: vertical;
					}

					input::-moz-placeholder,
					textarea::-moz-placeholder {
						color: #9ca3af;
					}

					input:-ms-input-placeholder,
					textarea:-ms-input-placeholder {
						color: #9ca3af;
					}

					input::placeholder,
					textarea::placeholder {
						color: #9ca3af;
					}

					button {
						cursor: pointer;
					}

					table {
						border-collapse: collapse;
					}

					h1,
					h2,
					h3,
					h4,
					h5,
					h6 {
						font-size: inherit;
						font-weight: inherit;
					}

					a {
						color: inherit;
						text-decoration: inherit;
					}

					button,
					input,
					optgroup,
					select,
					textarea {
						padding: 0;
						line-height: inherit;
						color: inherit;
					}

					pre,
					code,
					kbd,
					samp {
						font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
							'Liberation Mono', 'Courier New', monospace;
					}

					img,
					svg,
					video,
					canvas,
					audio,
					iframe,
					embed,
					object {
						display: block;
						vertical-align: middle;
					}

					img,
					video {
						max-width: 100%;
						height: auto;
					}

					.space-y-3 > :not([hidden]) ~ :not([hidden]) {
						--tw-space-y-reverse: 0;
						margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
						margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
					}

					.divide-y > :not([hidden]) ~ :not([hidden]) {
						--tw-divide-y-reverse: 0;
						border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
						border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
					}

					.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
						--tw-divide-opacity: 1;
						border-color: rgba(229, 231, 235, var(--tw-divide-opacity));
					}

					.bg-white {
						--tw-bg-opacity: 1;
						background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
					}

					.bg-gray-100 {
						--tw-bg-opacity: 1;
						background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
					}

					.bg-purple-100 {
						--tw-bg-opacity: 1;
						background-color: rgba(237, 233, 254, var(--tw-bg-opacity));
					}

					.hover\:bg-purple-200:hover {
						--tw-bg-opacity: 1;
						background-color: rgba(221, 214, 254, var(--tw-bg-opacity));
					}

					.bg-gradient-to-r {
						background-image: linear-gradient(to right, var(--tw-gradient-stops));
					}

					.from-indigo-400 {
						--tw-gradient-from: #818cf8;
						--tw-gradient-stops: var(--tw-gradient-from),
							var(--tw-gradient-to, rgba(129, 140, 248, 0));
					}

					.to-light-purple-500 {
						--tw-gradient-to: #a855f7;
					}

					.rounded-lg {
						border-radius: 0.5rem;
					}

					.flex {
						display: flex;
					}

					.table {
						display: table;
					}

					.flex-col {
						flex-direction: column;
					}

					.justify-center {
						justify-content: center;
					}

					.font-poppins {
						font-family: Poppins, sans-serif;
					}

					.font-berkshire {
						font-family: Berkshire\Swash, serif;
					}

					.font-inter {
						font-family: Inter, sans-serif;
					}

					.font-medium {
						font-weight: 500;
					}

					.font-bold {
						font-weight: 700;
					}

					.font-extrabold {
						font-weight: 800;
					}

					.text-base {
						font-size: 1rem;
						line-height: 1.5rem;
					}

					.text-lg {
						font-size: 1.125rem;
						line-height: 1.75rem;
					}

					.text-xl {
						font-size: 1.25rem;
						line-height: 1.75rem;
					}

					.text-3xl {
						font-size: 1.875rem;
						line-height: 2.25rem;
					}

					.text-4xl {
						font-size: 2.25rem;
						line-height: 2.5rem;
					}

					.leading-6 {
						line-height: 1.5rem;
					}

					.mx-auto {
						margin-left: auto;
						margin-right: auto;
					}

					.max-w-md {
						max-width: 28rem;
					}

					.min-h-screen {
						min-height: 100vh;
					}

					.focus\:outline-none:focus {
						outline: 2px solid transparent;
						outline-offset: 2px;
					}

					.p-3 {
						padding: 0.75rem;
					}

					.py-2 {
						padding-top: 0.5rem;
						padding-bottom: 0.5rem;
					}

					.py-3 {
						padding-top: 0.75rem;
						padding-bottom: 0.75rem;
					}

					.px-4 {
						padding-left: 1rem;
						padding-right: 1rem;
					}

					.py-6 {
						padding-top: 1.5rem;
						padding-bottom: 1.5rem;
					}

					.py-10 {
						padding-top: 2.5rem;
						padding-bottom: 2.5rem;
					}

					.pt-6 {
						padding-top: 1.5rem;
					}

					.absolute {
						position: absolute;
					}

					.relative {
						position: relative;
					}

					.inset-0 {
						top: 0px;
						right: 0px;
						bottom: 0px;
						left: 0px;
					}

					* {
						--tw-shadow: 0 0 #0000;
					}

					.shadow-lg {
						--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
							0 4px 6px -2px rgba(0, 0, 0, 0.05);
						box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
							var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
					}

					.shadow-xl {
						--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
							0 10px 10px -5px rgba(0, 0, 0, 0.04);
						box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
							var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
					}

					.hover\:shadow-md:hover {
						--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
							0 2px 4px -1px rgba(0, 0, 0, 0.06);
						box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
							var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
					}

					* {
						--tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
						--tw-ring-offset-width: 0px;
						--tw-ring-offset-color: #fff;
						--tw-ring-color: rgba(59, 130, 246, 0.5);
						--tw-ring-offset-shadow: 0 0 #0000;
						--tw-ring-shadow: 0 0 #0000;
					}

					.text-center {
						text-align: center;
					}

					.text-gray-700 {
						--tw-text-opacity: 1;
						color: rgba(55, 65, 81, var(--tw-text-opacity));
					}

					.text-gray-800 {
						--tw-text-opacity: 1;
						color: rgba(31, 41, 55, var(--tw-text-opacity));
					}

					.text-purple-600 {
						--tw-text-opacity: 1;
						color: rgba(124, 58, 237, var(--tw-text-opacity));
					}

					.text-purple-800 {
						--tw-text-opacity: 1;
						color: rgba(91, 33, 182, var(--tw-text-opacity));
					}

					.break-all {
						word-break: break-all;
					}

					.w-full {
						width: 100%;
					}

					.transform {
						--tw-translate-x: 0;
						--tw-translate-y: 0;
						--tw-rotate: 0;
						--tw-skew-x: 0;
						--tw-skew-y: 0;
						--tw-scale-x: 1;
						--tw-scale-y: 1;
						transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
							rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
							scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
					}

					.-skew-y-6 {
						--tw-skew-y: -6deg;
					}

					@-webkit-keyframes spin {
						to {
							transform: rotate(360deg);
						}
					}

					@keyframes spin {
						to {
							transform: rotate(360deg);
						}
					}

					@-webkit-keyframes ping {
						75%,
						100% {
							transform: scale(2);
							opacity: 0;
						}
					}

					@keyframes ping {
						75%,
						100% {
							transform: scale(2);
							opacity: 0;
						}
					}

					@-webkit-keyframes pulse {
						50% {
							opacity: 0.5;
						}
					}

					@keyframes pulse {
						50% {
							opacity: 0.5;
						}
					}

					@-webkit-keyframes bounce {
						0%,
						100% {
							transform: translateY(-25%);
							-webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
							animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
						}

						50% {
							transform: none;
							-webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
							animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
						}
					}

					@keyframes bounce {
						0%,
						100% {
							transform: translateY(-25%);
							-webkit-animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
							animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
						}

						50% {
							transform: none;
							-webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
							animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
						}
					}

					@media (min-width: 640px) {
						.sm\:rounded-3xl {
							border-radius: 1.5rem;
						}

						.sm\:text-lg {
							font-size: 1.125rem;
							line-height: 1.75rem;
						}

						.sm\:leading-7 {
							line-height: 1.75rem;
						}

						.sm\:mx-auto {
							margin-left: auto;
							margin-right: auto;
						}

						.sm\:max-w-xl {
							max-width: 36rem;
						}

						.sm\:p-20 {
							padding: 5rem;
						}

						.sm\:py-12 {
							padding-top: 3rem;
							padding-bottom: 3rem;
						}

						.sm\:-rotate-6 {
							--tw-rotate: -6deg;
						}

						.sm\:skew-y-0 {
							--tw-skew-y: 0deg;
						}
					}

					@media (min-width: 768px) {
					}

					@media (min-width: 1024px) {
					}

					@media (min-width: 1280px) {
					}

					@media (min-width: 1536px) {
					}

					</style>
					<body>
						<div class="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
							<div class="relative py-3 sm:max-w-xl sm:mx-auto">
								<div
									class="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-indigo-400 to-light-purple-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
								</div>
								<div class="relative px-4 py-10 bg-white shadow-xl sm:rounded-3xl sm:p-20">
									<div class="max-w-md mx-auto">
										<div class="w-full py-2">
											<h1 class="text-4xl font-bold text-center text-purple-600 font-berkshire">
												Qs
											</h1>
										</div>
										<div class="divide-y divide-gray-200">
											<h2 class="py-6 text-3xl font-extrabold text-center text-gray-800 font-inter">
												Welcome to QuizShare
											</h2>
										</div>
										<div class="divide-y divide-gray-200">
											<div class="py-6 space-y-3 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
												<p class="text-xl font-bold">Hello ${name}!</p>
												<p>Thank you for signing up for QuizShare. I'm really happy to have you!</p>
												<p>Please confirm that <span class="font-bold break-all">${email}</span> is your e-mail address by clicking on the button below within 24 hours</p>
											</div>
											<div class="pt-6 ">
													<a href='${url}' target='_blank' class="w-full p-3 text-lg font-medium leading-6 text-purple-800 bg-purple-100 rounded-lg font-poppins sm:text-lg sm:leading-7 focus:outline-none hover:bg-purple-200 hover:shadow-md">Verify</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</body>
					</html>`,
	};

	if (url.includes('changepassword')) {
		template = {
			from: 'quizshare@gmail.com',
			to: email,
			subject: 'Forgot Password',
			text: `Hello ${name}`,
			html: `${url}`,
		};
	}

	const info = await transporter.sendMail(template);

	console.log('Message sent: %s', info.messageId);

	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};
