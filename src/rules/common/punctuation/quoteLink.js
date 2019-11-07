import Typograf from '../../../typograf';

export default {
    name: 'common/punctuation/quoteLink',
    queue: 'show-safe-tags-html',
    index: '+5',
    handler(text, settings, context) {
        const quotes = this.getSetting('common/punctuation/quote', context.prefs.locale[0]);

        if (!quotes) { return text; }
        const entities = Typograf.HtmlEntities;
        const lquote1 = entities.getByUtf(quotes.left[0]);
        const rquote1 = entities.getByUtf(quotes.right[0]);
        let lquote2 = entities.getByUtf(quotes.left[1]);
        let rquote2 = entities.getByUtf(quotes.right[1]);

        lquote2 = lquote2 ? ('|' + lquote2) : '';
        rquote2 = rquote2 ? ('|' + rquote2) : '';

        const re = new RegExp('(<[aA]\\s[^>]*?>)(' + lquote1 + lquote2 + ')([^]*?)(' + rquote1 + rquote2 + ')(</[aA]>)', 'g');

        return text.replace(re, '$2$1$3$5$4');
    }
};
