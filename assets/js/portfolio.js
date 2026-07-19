// Simple modal preview for project cards
(function(){
    function qs(sel, ctx){ return (ctx||document).querySelector(sel); }
    function qsa(sel, ctx){ return Array.from((ctx||document).querySelectorAll(sel)); }

    var modal = qs('#project-modal');
    var modalImg = qs('.modal-image img', modal);
    var modalTitle = qs('.modal-title', modal);
    var modalDesc = qs('.modal-desc', modal);
    var closeBtn = qs('.modal-close', modal);

    function openModal(title, desc, img){
        modal.classList.add('open');
        modalImg.src = img || '';
        modalImg.alt = title || '';
        modalTitle.textContent = title || '';
        modalDesc.textContent = desc || '';
    }

    function closeModal(){
        modal.classList.remove('open');
    }

    // Open modal only when clicking the thumbnail link
    qsa('.project .thumb').forEach(function(link){
        link.addEventListener('click', function(e){
            e.preventDefault();
            var card = link.closest('.project');
            var title = card.getAttribute('data-title');
            var desc = card.getAttribute('data-desc');
            var img = card.getAttribute('data-image');
            openModal(title, desc, img);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e){ if(e.target===modal) closeModal(); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeModal(); });
})();
