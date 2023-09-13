(require 'org)

(defvar website-html-head
"<link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet'>
<link rel='stylesheet' type='text/css' href='assets/css/main.css'>
<link rel='icon' type='image/png' href='./images/art/personal_logo.png'>
<meta name='viewport' content='width=device-width, initial-scale=.5'>
<meta charset='utf-8'/>
<base target='_blank'/>
<script src='assets/js/vim.js'></script>")

(defvar website-html-head-blog
"<link rel='alternate' type='application/rss+xml' href='http://alex-bellon.com/blog/blog.xml' title='RSS feed'>")

(defvar website-html-preamble
"<ul class='header'>
    <li><a target='_parent' href='.'>home</a></li>
    <li><a target='_parent' href='./publications.html'>publications</a></li>
    <li><a target='_parent' href='./projects.html'>projects</a></li>
    <li><a target='_parent' href='./experience.html'>experience</a></li>
    <li><a target='_parent' href='./organizations.html'>organizations</a></li>
    <li><a target='_parent' href='./talks.html'>talks</a></li>
    <li><a target='_parent' href='./art.html'>art</a></li>
    <li><a target='_parent' href='./photography.html'>photography</a></li>
</ul>")

(defvar website-html-postamble
"<div class='footer'>
    <ul class='header' style='margin-top:0px; margin-bottom:0px;'>
        <li><a target='_parent' href='./cv.pdf'>cv</a></li>
        <li><a target='_parent' href='https://github.com/alex-bellon'>github</a></li>
    </ul>
</div")

(setq org-publish-project-alist
    `(("pages"
       :base-directory "~/GitHub/website/src/"
       :base-extension "org"
       :publishing-directory "~/GitHub/website/"
       :publishing-function org-html-publish-to-html
       :section-numbers nil
       :with-toc nil
       :html-head-include-default-style nil
       :html-head-include-scripts nil
       :html-head ,website-html-head
       :html-preamble ,website-html-preamble
       :html-postamble ,website-html-postamble)

      ("blog"
       :base-directory "~/GitHub/website/src/blog/"
       :base-extension "org"
       :recursive t
       :publishing-directory "~/GitHub/website/blog/"
       :publishing-function org-html-publish-to-html
       :section-numbers nil
       :with-toc nil
       :html-head-include-default-style nil
       :html-head-include-scripts nil
       :html-head ,website-html-head
       :html-preamble ,website-html-preamble
       :html-postamble ,website-html-postamble)

      ("rss"
       :base-directory "~/GitHub/website/src/blog/"
       :base-extension "org"
       :recursive t
       :publishing-directory "~/GitHub/website/blog/"
       :publishing-function (org-rss-publish-to-rss)
       :html-link-home "https://alex-bellon.com"
       :html-link-use-abs-url t)

      ("website" :components ("pages" "blog" "rss"))))

(org-publish-all t)
