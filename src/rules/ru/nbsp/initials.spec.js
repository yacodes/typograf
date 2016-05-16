tests.push(['ru/nbsp/initials', [
    [
        'А.С. Пушкин',
        'А.\u00A0С.\u00A0Пушкин'
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
        'с корреспондентом РАН. Читайте в разделе',
        'с корреспондентом РАН. Читайте в разделе'
    ]
]]);