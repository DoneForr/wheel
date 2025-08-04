/*
 * Copyright (c) 2020. shtrih
 */

const dataSets = {
    inventory: [
        'Щit',
        'Комбинезон химзащиты',
        'Рулон туалетной бумаги',
        'Респиратор',
        'Одноразовые перчатки',
        'Банка шпината',
        'Крышка от мусорного бака',
        'Ремонтный набор',
        'Антисептик',
        'Рука для фистинга имени Билли Херрингтона',
        'Сексуальные чулки',
        'Четырехлистный клевер',
        'Кукла вуду',
        'Набор выживальщика',
        'Наперсток удачи',
        'Переносной телепорт',
        'Футляр',
        'Жилетка Вассермана',
        'Стул мамы Мерфи',
        'Шиш кебаб',
        'Альпинистский трос',
        'Хакерский компьютер',
        'Корона короля петучей',
        'Благословение Хакса',
        'Порошок прозрения',
    ],
    coin: [
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Ребро!',
    ],
    agusha:[
        'Spyro remaster',
        'Rayman Legends',
        'Adventure Time: Pirates of the Enchiridion',
        'Samurai Jack: Battle Through Time',
        'DreamWorks Dragons: Dawn of New Riders',
        'The Simpsons Hit & Run',
        'Shrek 2',
        'Супер Корова',
        'Spongebob Squarepants Battle for Bikini Bottom',
    ],
    boomer:[
        'StarCraft 2',
        'Dawn of war',
        'Stronghold',
        'Age of Empires 3',
        'Red alert 3',
        'ParaWorld',
        'The Lord of the Rings: The Battle for Middle Earth II',
        'Морские титаны',
    ],
    god:[
        'Bioshock Infinite',
        'Remember Me',
        'Metro: Last Light',
        'Dead Space 3', 
        'Metal Gear Rising: Revengance',
        'Crysis 3',
        'Tomb Raider',
        'Call of Juarez: Gunslinger'
    ],
    rodina:[
        'Бумер: сорванные башни',
        'Lada racing club',
        'Месть боксера',
        'Русы против ящеров',
        'Волкодав: путь воина',
        'Beholder',
        'Black book',
        'Gun Done',
        'Peace Death',
        'The Underground Man',
        'The Mercury Man',
        'Братья Пилоты: По следам полосатого слона',
        'Алеша Попович и Тугарин Змей',
        'Счастливый билетик'
    ],
    kino:[
        'The Walking Dead: The Game',
        'Game of Thrones',
        'The Wolf Among Us',
        'Jurassic Park: The Game', 
        'Spider-Man 2',
        'Indiana Jones and the Staff of Kings', 
        'Avatar: The Game',
        'The Thing',
        'American McGee Alice',
        'The Godfather',
        'The Chronicles of Riddick: Escape from Butcher Bay',
        'Back to the Future: The Game',
    ],
    apomnite: [
        'God of War',
        'God of War 2',
        'Shadow of the Colossus',
        'Resident Evil 4',
        'Ratchet & Clank',
        'Счастливый Билетик',
        'Spider Man 2',
        'Killzone',
        'Prince of Persia - Warrior Within',
        'God Hand',
        'Sonic Umleashed',
        'Yakuza 2',
        'MGS 3'
    ],
    koleso: [
        'Павезло-павезло ',
        'Непавезло - непавезло…',
        'Павезло-непавезло?',
        'Есть три касты',
        'Чё было?',
        'Спасибо за гайд',
        'Свиток реролла',
        'Интрига',
        'Кинуть Рыгу',
        'Кубик кала',
        'Кубик кала, только крутой',
        'Олег(крыса)',
        'Щит Арториаса',
        'Ванишеходы',
        'Чел с 26-ю фолловерами',
        'EZ clap я здесь срал',
        'Jokerge УВЫ',
        'С кайфом посидим',
        'peepoRun',
        'Фанат готики',
        'Фанат DMC',
        'Меценат',
        'Нищая собака'
    ],   
    oleg:[
        'Lies of P',
        'Salt and sanctuary',
        'Blasphemous',
        'Grime',
        'Eldest souls',
        'Ender Lylis',
        'Blade of darkness',
        'Ai Limit',
        'Sifu',
        'Another Crabs Treasure',
    ],
    drochevo:[
        'Кусок мяса',
        'Башкачаш',
        'Симулятор кавказца',
        'Онли Ап',
        'Счастливый Билетик',
        'Король дебил',
        'Краш',
        'Орео',
        'The end is Nigh',
        'Ну типа в тегах есть платформер'
    ],
    shooter:[
        'TimeShift',
        'Bulletstorm',
        'Trepang2',
        'Singularity',
        'PainKiller',
        'Spec Ops: The line',
        'Forgive me father',
        'Forgive me father 2', 
        'BRUTAL JOHN 2'
    ],
    racist:[
        'DiRT: Showdown',
        'Need for speed Carbon',
        'Burnout Paradise',
        'Carmageddon Max Damage',
        'MX vs. ATV 2010',
        'NFS Hot Pursuit(2010)',
        'Trials Rising',
        'Driver San Francisco',
        'Street Racing Syndicate',
        'Dakar 18'
    ],
    zondre:[
        'The evil Within',
        'Dying Light',
        'Dead Island',
        'Dead Rising',
        'Stubbs the Zombie',
        'UNDYING',
        'Счастливый Билетик',
        'DeadLight'
    ]
};
let currentDataSet = 'inventory',
    editedDataSets = {};

const editDialog = document.getElementById('dialog-edit'),
    editButton = document.getElementById('btn-edit'),
    editConfirmButton = editDialog.getElementsByClassName('apply')[0],
    editOptions = editDialog.getElementsByClassName('options')[0],
    editPresets = editDialog.getElementsByClassName('presets')[0],
    optionClick = function (option, checked) {
        editedDataSets[currentDataSet][option] = checked;
    },
    generateOptions = function (dataObject) {
        let options = '';
        for (let i in dataObject) {
            options += `<label><input type="checkbox" onchange="optionClick('${i}', this.checked)" ${dataObject[i] ? 'checked' : ''} />${i}</label><br />`;
        }

        return options;
    },
    resetEditedDataSet = function () {
        editedDataSets[currentDataSet] = Object.fromEntries(dataSets[currentDataSet].map(v => v).sort().map(v => [v, true]));
    },
    editedDataToArray = function () {
        let result = [];

        for (let [key, value] of Object.entries(editedDataSets[currentDataSet])) {
            if (value) {
                result.push(key)
            }
        }

        return result;
    }
;

editButton.addEventListener('click', function () {
    if (currentDataSet === 'custom') {
        p5Instance.mouseDragEnable(false);
        customDialog.style.display = 'block';

        return;
    }

    editDialog.style.display = 'block';
    p5Instance.mouseDragEnable(false);

    editPresets.innerHTML = '';
    editPresets.append(...presets.getNodes(currentDataSet));
    editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);
});
editConfirmButton.addEventListener('click', function () {
    editDialog.style.display = 'none';
    p5Instance.mouseDragEnable();

    p5Instance.setData(editedDataToArray());
});

class Preset {
    constructor(title, disabledEntries, isDefault) {
        this._title = title;
        this._disabledEntries = disabledEntries;
        this._isDefault = Boolean(isDefault);
    }

    get isDefault() {
        return this._isDefault;
    }

    get domNode() {
        const el = document.createElement('a');

        el.setAttribute('href', '#');
        el.appendChild(document.createTextNode(this._title));
        el.addEventListener('click', this.handleClick.bind(this));

        return el;
    }

    handleClick() {
        resetEditedDataSet();

        for(const i in this._disabledEntries) {
            if (editedDataSets[currentDataSet][this._disabledEntries[i]]) {
                editedDataSets[currentDataSet][this._disabledEntries[i]] = false;
            }
        }

        editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);

        return false;
    }
}

class PresetAll extends Preset {
    constructor(isDefault) {
        super('Выбрать всё', [], isDefault);
    }
}

class PresetWithoutSpecialRolls extends Preset {
    constructor(isDefault) {
        super(
            'Без спецроллов',
            [
                'Чуйка на говно',
                'Выбор Бумера',
                'Выбор Зумера',
                'Чат здесь закон',
                'Я здесь закон',
                'Never Lucky',
            ],
            isDefault
        );
    }
}

class Presets {
    constructor() {
        this._presets = {
            // inventory: [
            //     new PresetAll(),
            // ],
            effects: [
                new PresetAll(),
                new PresetWithoutSpecialRolls(true),
            ],
            debuffs: [
                new PresetAll(),
                new PresetWithoutSpecialRolls(true),
            ],
            streamers: [
                new PresetAll(),
            ],
        };
    }

    hasPreset(dataSetKey) {
        return !!this._presets[dataSetKey];
    }

    getNodes(dataSetKey) {
        let result = [];

        for(const i in this._presets[dataSetKey]) {
            if (i % 2) {
                result.push(document.createTextNode(', '));
            }
            result.push(this._presets[dataSetKey][i].domNode);
        }

        return result;
    }

    applyDefaults(dataSetKey) {
        for(const i in this._presets[dataSetKey]) {
            if (this._presets[dataSetKey][i].isDefault) {
                this._presets[dataSetKey][i].handleClick();
            }
        }
    }
}

const presets = new Presets;

function getImageURI(index) {
    let result = './4x.avif',
        offset = 0
    ;
    switch (currentDataSet) {
        case "inventory":
            offset = 50;
        case "effects":
            result = './4x.avif';
            break;

        case "debuffs":
            const mapping = [
                1,
                2,
                7,
                10,
                12,
                13,
                16,
                18,
                20,
                21,
                22,
                23,
                26,
                25,
                31,
                44,
                48,
                49
            ];
            result = '../hpg-inventory/images/0' + ('0' + (mapping[index])).slice(-2) + '.png';
            break;

        case "coin":
            result = './coin-obverse-20.png';
            if (index === 1) {
                result = './coin-reverse-20.png';
            }
            if (index === 10) {
                result = './coin-gurt.png';
            }
            break;

        case "streamers":
            result = '../images/streamers/'+ dataSets[currentDataSet][index] +'.png';
            break;
    }

    return result;
}

const p5Instance = new p5(wheelSketch);

p5Instance.onAfterSetup = function () {
    p5Instance.setVideos([
        ['videos/учит крутить рулём под phonk.mp4', 5],
        ['videos/Папич-марш  прощание славянки .9мая.mp4', 7],
        ['videos/Putin walking meme (Full version).mp4', 32],
        // ['videos/BASSBOOSTED   Смешарики-От винта.mp4', 22],
        ['videos/JOJO\'S BIZARRE MAKEUP TUTORIAL.mp4', 6],
        ['videos/Пузантос - Бумаги [Morrowind].mp4', 129],
        ['videos/Сыновья России. Кто пчелок уважает.mp4', 26],
        ['videos/[SFM] Shrekophone.mp4', 15],
        ['videos/Мэддисон - Shooting Stars.mp4', 13],
        ['videos/All Star but they don\'t stop coming pitch corrected.mp4', 20],
        ['videos/U GOT THAT   LASQA EDITION.mp4', 9],
        ['videos/Pinoki - Pingana (Havana by Camila Cabello ft. Young Thug Remix).mp4', 54],
        ['videos/Noisestorm - Crab Rave (Official Music Video).mp4', p5Instance.random([75, 137])],
        // 'videos/14278244937910.webm',
        'videos/14686000376951.webm',
        'videos/6 отвлекающих кадров.mp4',
        'videos/[Re-upload] [1080p] HONK HONK.mp4',
        'videos/Крутое ХПГ.webm',
        'videos/CHIKA VIBES   Kaguya-sama Love is War.mp4',
        'videos/best Chika meme ever   anime characters in Chika dance MV.mp4',
        'videos/Не Твое Дело - Я буду рядом.mp4',
        'videos/Music make you lose control triangle.mp4',
        'videos/Танец под волчок из  Что Где Когда.mp4',
        'videos/Лизон в ХПГ.mp4',
        'videos/Мэддисон дрифтит под Фонк.mp4',
        // 'videos/01.mp4',
        'videos/02.mp4',
        'videos/03.mp4',
        'videos/04.mp4',
        'videos/06.mp4',
        'videos/08.mp4',
        'videos/09.mp4',
        'videos/10.mp4',
        'videos/12.mp4',
        'videos/13.mp4',
        'videos/14.mp4',
        'videos/16.mp4',
        'videos/17.mp4',
        'videos/18.mp4',
        'videos/19.mp4',
        'videos/20.mp4',
        'videos/21.mp4',
    ]);
};

const image = document.querySelector('#item-image img');
p5Instance.onSelectItem = function(data, selectedKey) {
    if (dataSets[currentDataSet]) {
        image.src = getImageURI(dataSets[currentDataSet].indexOf(data[selectedKey]));
    }
    else {
        image.src = '../hpg-inventory/images/000.png';
    }
};

const customDialog = document.getElementById('custom-list'),
    customTextarea = customDialog.getElementsByTagName('textarea')[0],
    customButton = customDialog.getElementsByTagName('button')[0]
;

customButton.addEventListener('click', function () {
    customDialog.style.display = 'none';

    p5Instance.setData(customTextarea.value.split('\n'));
    p5Instance.mouseDragEnable();
});

let radios = document.querySelectorAll('[name="list"]');
for(let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function () {
        currentDataSet = this.value;

        if (this.value === 'custom') {
            p5Instance.mouseDragEnable(false);
            customDialog.style.display = 'block';

            return;
        }

        customDialog.style.display = 'none';
        p5Instance.mouseDragEnable();

        if (presets.hasPreset(currentDataSet)) {
            if (!editedDataSets[currentDataSet]) {
                resetEditedDataSet();
                presets.applyDefaults(currentDataSet);
            }

            p5Instance.setData(editedDataToArray());
            editButton.removeAttribute('disabled');
        }
        else {
            p5Instance.setData(dataSets[currentDataSet]);
            editButton.setAttribute('disabled', 'disabled');
        }
    });

    // Выбираем начальный вариант при загрузке страницы
    if (radios[i].hasAttribute('checked')) {
        radios[i].dispatchEvent(new Event('click'));
    }
}
