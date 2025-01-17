import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['ru/nbsp/initials', [
    [
        'А.С. Пушкин',
        'А.\u00A0С.\u00A0Пушкин'
    ],
    [
        'В.И. Немирович-Данченко',
        'В.\u00A0И.\u00A0Немирович-Данченко'
    ],
    [
        'А. С. Пушкин',
        'А.\u00A0С.\u00A0Пушкин'
    ],
    [
        'А.С. Пушкин, А. С. Пушкин, А.С. Пушкин\nА. С. Пушкин: А.С. Пушкин',
        'А.\u00A0С.\u00A0Пушкин, А.\u00A0С.\u00A0Пушкин, А.\u00A0С.\u00A0Пушкин\nА.\u00A0С.\u00A0Пушкин: А.\u00A0С.\u00A0Пушкин'
    ],
    [
        '"А.С. Пушкин"',
        '"А.\u00A0С.\u00A0Пушкин"'
    ],
    [
        '«А.С. Пушкин»',
        '«А.\u00A0С.\u00A0Пушкин»'
    ],
    [
        '<em>А.С. Пушкин</em>',
        '<em>А.\u00A0С.\u00A0Пушкин</em>'
    ],
    [
        'с корреспондентом РАН. Читайте в разделе',
        'с корреспондентом РАН. Читайте в разделе'
    ]
]]);
