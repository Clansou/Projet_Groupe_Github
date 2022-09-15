'use strict'

const revealRatio = 0.5
    const revealOptions={
        root: null,
        rootMargin: '0px',
        threshold: revealRatio
    }

const hiddenItem_1 = document.querySelector(".hidden_item_1")

    if (hiddenItem_1 != null) {
        const observerForReveal_1 = function (revealEntries_1, reveal_1) {
            revealEntries_1.forEach(function(entry_1) {
                if(entry_1.intersectionRatio > revealRatio){
                    reveal_1.unobserve(entry_1.target)
                    hiddenItem_1.classList.add("reveal_item_1")
                }
            });
        }
        
        const reveal_1 = new IntersectionObserver(observerForReveal_1, revealOptions)
        reveal_1.observe(document.querySelector('.hidden_item_1'))
    }

const hiddenItem_2 = document.querySelector(".hidden_item_2")

    if (hiddenItem_2 != null) {
        const observerForReveal_2 = function (revealEntries_2, reveal_2) {
            revealEntries_2.forEach(function(entry_2) {
                if(entry_2.intersectionRatio > revealRatio){
                    reveal_2.unobserve(entry_2.target)
                    hiddenItem_2.classList.add("reveal_item_2")
                }
            });
        }
        
        const reveal_2 = new IntersectionObserver(observerForReveal_2, revealOptions)
        reveal_2.observe(document.querySelector('.hidden_item_2'))
    }
