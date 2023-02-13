const Share = (navigateTo, type) => {
    const message = `Hey, Are you looking for Job, courses, and schemes, Swayam will really help you get Job, courses and schemes, here is the link job please click this link  ${window.location.origin}/${navigateTo}`
    switch (type) {
        case 'facebook': {
            let temp = `https://www.facebook.com/sharer.php?u=${window.location.origin}/${navigateTo}`;
            const win = window.open(temp);
            win?.open();
            break;
        }
        case 'twitter': {
            const win = window.open(`https://twitter.com/intent/tweet?text=${message}`);
            win?.open();
            break;
        }
        case 'linkedin': {
            const win = window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}/${navigateTo}`);
            win?.open();
            break;
        }
        case 'whatsapp': {
            const win = window.open(`https://api.whatsapp.com/send?text=${message}`);
            win?.open();
            break;
        }
    }
}
export default Share