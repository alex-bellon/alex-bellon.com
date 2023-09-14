(require 'ox)

(defvar website-html-head
"<link rel='stylesheet' type='text/css' href='assets/css/main.css'>
<link rel='icon' type='image/png' href='./images/art/personal_logo.png'>
<meta name='viewport' content='width=device-width, initial-scale=.5'>
<meta charset='utf-8'/>
<base target='_blank'/>
<script src='assets/js/vim.js'></script>")

(defvar blog-html-head
"<link rel='stylesheet' type='text/css' href='../assets/css/brain.css'>
<link rel='icon' type='image/png' href='../images/art/personal_logo.png'>
<meta name='viewport' content='width=device-width, initial-scale=.5'>
<meta charset='utf-8'/>
<base target='_blank'/>
<script src='../assets/js/vim.js'></script>")

(defvar brain-html-head
"<link rel='stylesheet' type='text/css' href='../assets/css/blog.css'>
<link rel='icon' type='image/png' href='../images/art/personal_logo.png'>
<meta name='viewport' content='width=device-width, initial-scale=.5'>
<meta charset='utf-8'/>
<base target='_blank'/>
<script src='../assets/js/vim.js'></script>")

(defvar website-html-preamble
"<ul class='header banner'>
    <li><a target='_parent' href='.'>home</a></li>
    <li><a target='_parent' href='./publications'>publications</a></li>
    <li><a target='_parent' href='./projects'>projects</a></li>
    <li><a target='_parent' href='./experience'>experience</a></li>
    <li><a target='_parent' href='./blog'>blog</a></li>
    <li><a target='_parent' href='./misc'>misc</a></li>
</ul>")

(defvar blog-html-preamble
"<ul class='header banner'>
    <li><a target='_parent' href='..'>home</a></li>
    <li><a target='_parent' href='../publications'>publications</a></li>
    <li><a target='_parent' href='../projects'>projects</a></li>
    <li><a target='_parent' href='../experience'>experience</a></li>
    <li><a target='_parent' href='.'>blog</a></li>
    <li><a target='_parent' href='../misc'>misc</a></li>
</ul>
<div class='preamble'>
<h1 style='margin-top: 60px;'>%t</h1>
<p class=meta>posted %C (edited %T)</p></div>")

(defvar brain-html-preamble
"<div class='preamble'>
<h1 style='margin-top: 60px;'>%t</h1>
<p class=meta>posted %C (edited %T)</p></div>")

(defvar website-html-postamble
"<div>
    <ul class='footer banner' style='margin-top:0px; margin-bottom:0px;'>
        <li><a target='_parent' href='./cv.pdf'>cv</a></li>
        <li><a target='_parent' href='https://github.com/alex-bellon'>github</a></li>
    </ul>
</div")

(setq org-html-metadata-timestamp-format "%m.%d.%y %H:%M")

(defun m/org-publish-org-sitemap-format-entry (entry style project)
  (cond ((not (directory-name-p entry))
         (let* ((date (org-publish-find-date entry project)))
           (format "[%s] [[file:%s][%s]]"
                   (format-time-string "%y.%m.%d" date) entry
                   (org-publish-find-title entry project))))
        ((eq style 'tree)
         ;; Return only last subdir.
         (file-name-nondirectory (directory-file-name entry)))
        (t entry)))

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
       :with-author nil
       :with-title nil
       :html-head-include-default-style nil
       :html-head-include-scripts nil
       :html-validation-link nil
       :html-preamble ,blog-html-preamble
       :html-postamble nil
       :html-head ,blog-html-head
            
       :auto-sitemap t
       :sitemap-title "blog bosts"
       :sitemap-filename "index.org"
       :sitemap-format-entry m/org-publish-org-sitemap-format-entry
       :sitemap-sort-files anti-chronologically)
      
      ("brain"
       :base-directory "~/GitHub/website/src/brain/"
       :base-extension "org"
       :recursive t
       :publishing-directory "~/GitHub/website/brain/"
       :publishing-function org-html-publish-to-html
       :section-numbers nil
       :with-author nil
       :with-title nil
       :html-head-include-default-style nil
       :html-head-include-scripts nil
       :html-validation-link nil
       :html-preamble ,brain-html-preamble
       :html-postamble nil
       :html-head ,brain-html-head
           
       :auto-sitemap t
       :sitemap-title "brain"
       :sitemap-filename "index.org"
       :sitemap-format-entry m/org-publish-org-sitemap-format-entry)

      ("website" :components ("pages" "blog" "brain"))))

(defun filter-local-links (link backend info)
  "Filter that converts all the /index.html links to /"
  (if (org-export-derived-backend-p backend 'html)
	  (replace-regexp-in-string ".html" "" link)))

;; Do not forget to add the function to the list!
(add-to-list 'org-export-filter-link-functions 'filter-local-links)

(org-publish-all t)
