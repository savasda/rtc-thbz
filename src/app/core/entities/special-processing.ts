import { SpecialProcessing, SpecialProcessingREsult, FieldType } from "./typings";

export const SPECIAL_PROCESSING_DATA: Array<SpecialProcessing> = [
  {
    id: 1,
    isChacked: false,
    caption: 'Температура воздуха от 0 до +20°С/сухо',
    value: 1
  },
  {
    id: 2,
    isChacked: false,
    caption: 'Температура воздуха от 0 до -10°С и Vв = 5м/c',
    value: 1.1
  },
  {
    id: 3,
    isChacked: false,
    caption: 'Температура воздуха от 0 до -10°С и Vв = 5-10м/c',
    value: 1.3
  },
  {
    id: 4,
    isChacked: false,
    caption: 'Температура воздуха от 0 до -10°С и Vв > 10м/c',
    value: 1.4
  },
  {
    id: 5,
    isChacked: false,
    caption: 'Температура воздуха от -10 до -20°С и Vв = 5м/c',
    value: 1.2
  },
  {
    id: 6,
    isChacked: false,
    caption: 'Температура воздуха от -10 до -20°С и Vв = 5-10м/c',
    value: 1.4
  },
  {
    id: 7,
    isChacked: false,
    caption: 'Температура воздуха от -10 до -20°С и Vв > 10м/c',
    value: 1.6
  },
  {
    id: 8,
    isChacked: false,
    caption: 'Температура воздуха выше +20°С (дождь)',
    value: 1.3
  },
  {
    id: 9,
    isChacked: false,
    caption: 'Температура воздуха выше +20°С (сухо)',
    value: 1.5
  },
  {
    id: 10,
    isChacked: false,
    caption: 'Температура воздуха выше +30°С и ниже -20°С',
    value: 1.25
  },
  {
    id: 11,
    isChacked: false,
    caption: 'Выполнение работ в СИЗК и СИЗОД',
    value: 1.35
  },
  {
    id: 12,
    isChacked: false,
    caption: 'Выполнение работ в противогазе',
    value: 1.1
  },
  {
    id: 13,
    isChacked: false,
    caption: 'Выполнение работ в ОЗК',
    value: 1.3
  },
  {
    id: 14,
    isChacked: false,
    caption: 'Выполнение работ на тяжелых грунтах',
    value: 1.7
  },
  {
    id: 15,
    isChacked: false,
    caption: 'Выполнение работ в дождь, снегопад',
    value: 1.25
  },
  {
    id: 16,
    isChacked: false,
    caption: 'Выполнение работ в ночное время',
    value: 1.4
  },
  {
    id: 17,
    isChacked: false,
    caption: 'Выполнение работ в ночное время при искуственном освещении',
    value: 1.2
  },
  {
    id: 18,
    isChacked: false,
    caption: 'Марш в туман, распутицу и в пустыне',
    value: 1.4
  },
  {
    id: 19,
    caption: 'Квалификация личного состава:',
  },
  {
    id: 20,
    isChacked: false,
    caption: '1-й класс',
    value: 1.25
  },
  {
    id: 21,
    isChacked: false,
    caption: '2-й класс',
    value: 1.4
  },
  {
    id: 22,
    isChacked: false,
    caption: '3-й класс',
    value: 1.7
  }
];

export const SPECIAL_PROCESSING_RESULT_DATA: Array<SpecialProcessingREsult> =[
  {
    caption: 'Количество личного состава в подразделении, чел.',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Площадь ответственности подразделения (района расположения), км²',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Площадь заражения, км²',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Доля личного состава попавшего в зону заражения',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Количество личного состава, подлежащего специальной обработке. чел.',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Количество ВВСТ в подразделении, ед.',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Площадь ответственности подразделения (района расположения), км²',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Площадь заражения, км²',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Доля ВВСТ попавшего в зону заражения',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Количество ВВСТ подлежащих специальной обработке, ед.',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Количество расчетов АРС-14, участвующих в проведении специальной обработки, ед.',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Поправочный коэффициент',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Время специальной обработки, заданное старшим начальником, ч',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Время специальной обработки, имеющимся количеством расчетов АРС-14',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Необходимое количество расчетов АРС-14 для проведения специальной обработки за время, заданное старшим начальником',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Объем задач по обработке участков местности, га',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Объем задач по обработке дорог, км',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Количество расчетов АРС-14, участвующих в проведении специальной обработки, ед',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Вид обработки',
    value: 2,
    type: FieldType.checkbox
  },
  {
    caption: 'Количество заездов по обрабатываему участку местности',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Количество заездов по обрабатываему участку дороги',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Время специальной обработки, заданное старшим начальником, ч',
    value: null,
    type: FieldType.input
  },
  {
    caption: 'Время обработки участка местности, имеющимся количеством расчетов АРС-14, ч',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Время обработки участка дорог, имеющимся количеством расчетов АРС-14, ч',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Потребное количество расчетов АРС-14 для проведения обработки участка местности за время, заданное старшим начальником, ед.',
    value: null,
    type: FieldType.string
  },
  {
    caption: 'Потребное количество расчетов АРС-14 для проведения обработки участка дорог за время, заданное старшим начальником, ед.',
    value: null,
    type: FieldType.string
  },
]


export const AEROSOL_DATA: Array<any> = [
  {
    name: 'Зенитная ракетная бригада',
    caption: 'Стартовая позиция',
    size: '400 х 1000',
    value: '10'
  },
  {
    name: 'Передающий центр',
    caption: 'Группа передатчиков',
    size: '400 х 1000',
    value: '4'
  },
  {
    name: 'Аэродром',
    caption: 'Стоянка самолета',
    size: '500 х 1000',
    value: '4'
  },
  {
    name: 'Аэродром',
    caption: 'ВПП',
    size: '300 х 3000',
    value: '1'
  },
  {
    name: 'Аэродром',
    caption: 'Вертолетная площадка',
    size: '300 х 1500',
    value: '3'
  },
  {
    name: 'Бригада материального обеспечения',
    caption: 'Склад ГСМ, РАВ',
    size: '400 х 800',
    value: '3'
  },
  {
    name: 'Танковоя (мотострелковая) ротв в районе сосредоточения',
    caption: '',
    size: '400 х 700',
    value: '2'
  }
]


export const PERIODICALLY_PERFOMED_TASKS_KOOF = [
  {
    name: 'Равнинная, дороги прямолинейные',
    koof_1: {
      value: 1.0,
      checked: false
    },
    koof_2: {
      value: 1.0,
      checked: false
    },
    koof_3: {
      value: 1.05,
      checked: false
    },
    koof_4: {
      value: 1.5,
      checked: false
    }
  },
  {
    name: 'Холмистая, дороги извилистые',
    koof_1: {
      value: 1.05,
      checked: false
    },
    koof_2: {
      value: 1.1,
      checked: false
    },
    koof_3: {
      value: 1.15,
      checked: false
    },
    koof_4: {
      value: 1.2,
      checked: false
    }
  },
  {
    name: 'Холмистая, дороги сильно извилистые',
    koof_1: {
      value: 1.15,
      checked: false
    },
    koof_2: {
      value: 1.2,
      checked: false
    },
    koof_3: {
      value: 1.25,
      checked: false
    },
    koof_4: {
      value: 1.3,
      checked: false
    }
  }
]

export const PERIODICALLY_PERFOMED_TASKS_SPEED = [
  {
    name: 'Асфальтобетонное',
    koof_1: {
      value: 40,
      checked: false
    },
    koof_2: {
      value: 25,
      checked: false
    },
    koof_3: {
      value: 20,
      checked: false
    },
  },
  {
    name: 'Щебенчатое, гравийное',
    koof_1: {
      value: 40,
      checked: false
    },
    koof_2: {
      value: 20,
      checked: false
    },
    koof_3: {
      value: 20,
      checked: false
    },
  },
  {
    name: 'Мостовая или брущатка',
    koof_1: {
      value: 35,
      checked: false
    },
    koof_2: {
      value: 25,
      checked: false
    },
    koof_3: {
      value: 20,
      checked: false
    },
  },
  {
    name: 'Булыжное',
    koof_1: {
      value: 30,
      checked: false
    },
    koof_2: {
      value: 20,
      checked: false
    },
    koof_3: {
      value: 15,
      checked: false
    },
  },
  {
    name: 'Железные дороги без добавок',
    koof_1: {
      value: 25,
      checked: false
    },
    koof_2: {
      value: 15,
      checked: false
    },
    koof_3: {
      value: 10,
      checked: false
    },
  },
  {
    name: 'Снежный покров на колонных путях при глубине снега',
    koof_1: 'УАЗ-469',
    koof_2: 'БРДМ',
    koof_3: 'РХМ'
  },
  {
    name: '20 см',
    koof_1: {
      value: 10,
      checked: false
    },
    koof_2: {
      value: 12,
      checked: false
    },
    koof_3: {
      value: 20,
      checked: false
    },
  },
  {
    name: '50 см',
    koof_1: '-',
    koof_2: {
      value: 8,
      checked: false
    },
    koof_3: {
      value: 10,
      checked: false
    },
  },
]

export const PERIODICALLY_PERFOMED_TASKS_OUT = [
  {
    name: 'Легкопроходимая для всех видов транспорта (равнинная, открытая и слабопересеченная)',
    koof_1: {
      value: 1,
      checked: false
    },
    koof_2: {
      value: 0.7,
      checked: false
    },
  },
  {
    name: 'Проходимая (холмистая, местами на 20-30%, среднепересеченная)',
    koof_1: {
      value: 0.8,
      checked: false
    },
    koof_2: {
      value: 0.5,
      checked: false
    }
  },
  {
    name: 'Труднопроходимая (заболоченная, местами до 60%, низкоекорная)',
    koof_1: {
      value: 0.5,
      checked: false
    },
    koof_2: {
      value: 0.3,
      checked: false
    },
  }
]


export const MANAGER_TIMING = [
  {
    name: 'Время получения задачи',
    value: null
  },
  {
    name: 'Доклад выводов из оценки РХБО/предложений в замысел',
    value: null
  },
  {
    name: 'Отдача пбр',
    value: null
  },
  {
    name: 'Доклад предложений в решение',
    value: null
  },
  {
    name: 'Доведение решения',
    value: null
  },
  {
    name: 'Отдача БР, распоряжений по РХБ защите',
    value: null
  },
  {
    name: 'Доклад плана РХБ защиты',
    value: null
  },
  {
    name: 'Доведение замысла',
    value: null
  },
]

export const BEFORE_EVENT_TIMING = [{
  name: 'Время получения задачи',
  value: null,
}, {
  name: 'Доклад выводов из оценки РХБО (предложений в замысел)',
  value: 200
}, {
  name: 'Отдача ПБР',
  value: 500
}, {
  name: 'Доклад предложений в решение',
  value: 580
}, {
  name: 'Отдача БР, распоряжений по РХБ защите',
  value: 780
}, {
  name: 'Доклад плана РХБ защиты',
  value: 1300
}]

export const DURING_EVENT_TIMING = [{
  name: 'Время получения задачи',
  value: null,
}, {
  name: 'Доклад выводов из оценки РХБО (предложений в замысел)',
  value: 85
}, {
  name: 'Отдача ПБР',
  value: 145
}, {
  name: 'Доклад предложений в решение',
  value: 165
}, {
  name: 'Отдача БР, распоряжений по РХБ защите',
  value: 410
}, {
  name: 'Доклад плана РХБ защиты',
  value: 600
}]

export const OPPORTUNITIES_RHR = [
  {
    name: 'Количество штатных расчетов РХР',
    value: null,
    type: 'ед.'
  },
  {
    name: 'Количество специально подготовленных расчетов РХР',
    value: null,
    type: 'ед.'
  },
  {
    name: 'Возможности по радиационной разветке маршрутов (за 1 час)',
    value: null,
    type: 'км/ч'
  },
  {
    name: 'Возможности по химической разветке маршрутов (за 1 час)',
    value: null,
    type: 'км/ч'
  },
  {
    name: 'Возможности по химической разветке маршрутов (за 1 час)',
    value: null,
    type: 'км2/ч'
  },
  {
    name: 'Возможности по химической разветке районов (за 1 час)',
    value: null,
    type: 'км2/ч'
  }
]

export const OPPORTUNITIES_SO= [
  {
    name: 'Количество расчетов АРС-14, участвующих в проведении СО',
    value: null,
    type: 'ед.'
  },
  {
    name: 'Количество расчетов АРС-15, участвующих в проведении СО',
    value: null,
    type: 'ед.'
  },
  {
    name: 'Возможности во СО ВВСТ',
    value: 0,
    type: 'ед./ч'
  },
  {
    name: 'Возможности по дегазации и дезинфекции участков местности и дорог',
    value: 0,
    type: 'км/ч'
  },
]

export const OPPORTUNITIES_AM = [
  {
    name: 'Количество дымовых машин',
    value: null,
    type: 'ед.'
  },
  {
    name: 'Количество АГП',
    value: null,
    type: 'ед.'
  },
  {
    name: 'Количество ДМ-11',
    value: null,
    type: 'шт.'
  },
  {
    name: 'Количество УДШ',
    value: null,
    type: 'шт.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием ТДА - 2к при фронтальном ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием ТДА - 2к при косом ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием ТДА - 2к при фланговом ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием АГП при фронтальном ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием АГП при косом ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием АГП при фланговом ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием ДМ-11 при фронтальном ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием ДМ-11 при косом ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием ДМ-11 при фланговом ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием УДШ при фронтальном ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием УДШ при косом ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке линейной завесы с использованием УДШ при фланговом ветре',
    value: null,
    type: 'м.'
  },
  {
    name: 'Возможности по постановке площадной аэрозольной завесы с использованием ТДА-2К',
    value: null,
    type: 'м.2'
  },
  {
    name: 'Возможности по постановке площадной аэрозольной завесы с использованием АГП',
    value: null,
    type: 'м.2'
  },
  {
    name: 'Возможности по постановке площадной аэрозольной завесы с использованием ДМ-11',
    value: null,
    type: 'м.2'
  },
  {
    name: 'Возможности по постановке площадной аэрозольной завесы с использованием УДШ',
    value: null,
    type: 'м.2'
  },
]


export const OPPORTUNITIES_OP = [
  {
    name: 'Количество огнеметов в подразделении',
    value: null,
    type: 'шт.'
  },
  {
    name: 'Количество огнеметов, требуемое для поражения цели',
    value: null,
    type: 'шт.'
  },
  {
    name: 'Определение возможностей подразделения',
    value: null,
    type: 'целей.'
  },
  {
    name: 'Снижение возможности подразделения в зависимости от условий противодействия противника',
    value: null,
    type: '%'
  },
  {
    name: 'Возможности подразделений с учетом сопротивления противника',
    value: null,
    type: 'целей.'
  },
]

export const OPPORTUNITIES_OP_KOOF = [{
  name: 50,
  koof_1: {
    value: 1,
    checked: false
  },
  koof_2: {
    value: 1,
    checked: false
  },
  koof_3: {
    value: 1,
    checked: false
  },
  koof_4: {
    value: 1,
    checked: false
  },
  koof_5: {
    value: 1,
    checked: false
  },
  koof_6: {
    value: 1,
    checked: false
  },
}, {
  name: 100,
  koof_1: {
    value: 1,
    checked: false
  },
  koof_2: {
    value: 1,
    checked: false
  },
  koof_3: {
    value: 1,
    checked: false
  },
  koof_4: {
    value: 1,
    checked: false
  },
  koof_5: {
    value: 1,
    checked: false
  },
  koof_6: {
    value: 1,
    checked: false
  }
}, {
  name: 200,
  koof_1: {
    value: 2,
    checked: false
  },
  koof_2: {
    value: 4,
    checked: false
  },
  koof_3: {
    value: 1,
    checked: false
  },
  koof_4: {
    value: 1,
    checked: false
  },
  koof_5: {
    value: 1,
    checked: false
  },
  koof_6: {
    value: 1,
    checked: false
  },
}, {
  name: 300,
  koof_1: {
    value: 3,
    checked: false
  },
  koof_2: {
    value: 6,
    checked: false
  },
  koof_3: {
    value: 1,
    checked: false
  },
  koof_4: {
    value: 1,
    checked: false
  },
  koof_5: {
    value: 1,
    checked: false
  },
  koof_6: {
    value: 1,
    checked: false
  },
}, {
  name: 400,
  koof_1: {
    value: 6,
    checked: false
  },
  koof_2: {
    value: null,
    checked: false
  },
  koof_3: {
    value: 2,
    checked: false
  },
  koof_4: {
    value: 2,
    checked: false
  },
  koof_5: {
    value: 2,
    checked: false
  },
  koof_6: {
    value: 2,
    checked: false
  },
},
{
  name: 500,
  koof_1: {
    value: 10,
    checked: false
  },
  koof_2: {
    value: null,
    checked: false
  },
  koof_3: {
    value: 2,
    checked: false
  },
  koof_4: {
    value: 2,
    checked: false
  },
  koof_5: {
    value: 2,
    checked: false
  },
  koof_6: {
    value: 3,
    checked: false
  },
},
{
  name: 600,
  koof_1: {
    value: 14,
    checked: false
  },
  koof_2: {
    value: null,
    checked: false
  },
  koof_3: {
    value: 3,
    checked: false
  },
  koof_4: {
    value: 3,
    checked: false
  },
  koof_5: {
    value: 3,
    checked: false
  },
  koof_6: {
    value: 5,
    checked: false
  },
}]


