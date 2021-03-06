//-----------------------------------------------------------------------ЛОГИЧЕСКИЕ ПАРАМЕТРЫ--------------------------------------------------------------------
//Переменные для системы ВВОДА----------------------------------------------------------------------------------
var touchTapTimeOut = 100;//Параметр указывающий сколько миллисекунд надо держать пользователю на элементе в скроле чтобы его переместить(НУЖНО ЧТОБЫ ОТДЕЛЯТЬ ПРОКРУТКУ СКРОЛА ОТ ПЕРЕМЕЩЕНИЙ ЭЛЕМЕНТОВ В СКРОЛЕ)
var distanceOfScroll = 5; //Параметр указывающий на каком расстоянии от точки тапа при движении по экрану начинать отрабатывать события скрола
var scrollStep = 5; //Шаг скрола в пикселях(Когда крутишь колесиком мыши)
var touchScrollVal = 2;//Шаг скрола когда пальцами ресайзишь
var toolTipDelay = 1000000000;//Задержка в миллисекундах после которой всплывают тултипы если держать мышку на элементе
//Игровые параметры---------------------------------------------------------------------------------------------
var labyrinthSize = 3;//Стартовый размер лабиринта(Например если 5, тогда при старте игры сгенерится лабиринт размером 5x5). ДЛЯ АЛГОРИТМА ГЕНЕРАЦИИ ЭТО ДОЛЖНО БЫТЬ НЕЧЕТНОЕ ЧИСЛО
var labyrinthMaxSize = 0;//Ограничение на максимальный размер лабиринта. Если = 0, то максимума нет.
var isLabyrinthGrow = true;//Переключение возможности увеличения лабиринта при прохождении(Увеличивается лабиринт или нет при выходе из него)
var isVisualizeCodeMap = true;//Флаг для визуализации комманд исполняемых роботом
var soundIsOn = true;
var robotMoveDelay = 350; //Задержка при движении робота в милисекундах(ЧЕМ МЕНЬШЕ ТЕМ БЫСТРЕЕ)
var visualizeCommandsDelay = 100;//Задержка при отрисовке выполняемых роботом команд, когда он стоит на месте
var saveTimeout = 1000; //Таймаут для метода который следит за изменениями размера экрана
var difficultyLevel = "EASY";//Уровень сложности(если EASY - робот сам поворачивается куда нужно при движении)
var totalTokensOnMap = 15; //Сколько всего монеток генерится в лабиринте
var inactiveItemsAlpha = 0.5;//Альфа канал неактивных элементов интерфейса(кнопок и тд)
var passiveItemsAlpha = 0.5;//Альфа канал неактивных КОМАНД в кодмапе
var infinityCycleSteps = 5;//Количество итераций которые робот может стоять просто так(Если он простоит 5 итераций ничего не сделав, то это будет считаться бесконечным циклом БЕЗДЕЙСТВИЯ
//РЕЖИМ ОТОБРАЖЕНИЯ ДОСТУПНЫХ КОМАНД:
// "simple" - только простые команды перемещений и подбора батареек
// "medium" - команды для перемещений не только туда куда едет робот, но и в направлении взгляда, команды подобрать и бросить обьект
// "all" - все доступные команды включая сложные блоки команд
var commandsViewMode = "all";
var isNewGraphicLab = true;//Временная переменная флаг для генерации лабиринта с НОВОЙ ГРАФИК
//ГЛОБАЛЬНЫЕ ПЕРМЕННЫЕ КОТОРЫЕ СОДЕРЖАТ ОБЩЕИГРОВЫЕ ДАННЫЕ(МЕНЯЮТСЯ НА ПРОТЯЖЕНИИ ИГРЫ)-------------------------
var totalSeconds = 0; //Для хранения колличества секунд которые прошли с начала прохождения уровня
var playerInventory = new Array();//Инвентарь робота. На карте он может собирать и перетаскивать элементы
var playerMoveCount = 0;//Счетчик ходов робота
var isDrawFPS = false;
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------ЗВУКОВЫЕ ФАЙЛЫ-----------------------------------------------------------------
var audio_GUI_click = pjs.audio.newAudio(["audio/clickGUI.ogg","audio/clickGUI.aac"]);
var audio_lastWindow = pjs.audio.newAudio(["audio/lastWindow.ogg","audio/lastWindow.aac"]);
var audio_field_click = pjs.audio.newAudio(["audio/clickField.ogg","audio/clickField.aac"]);
var audio_object_up = pjs.audio.newAudio(["audio/gameObjectUp.ogg","audio/gameObjectUp.aac"]);
var audio_object_down = pjs.audio.newAudio(["audio/gameObjectDown.ogg","audio/gameObjectDown.aac"]);
var audio_object_messeng = pjs.audio.newAudio(["audio/messeng.ogg","audio/messeng.aac"]);
var audio_scroll_click = pjs.audio.newAudio(["audio/scrollClick.ogg","audio/scrollClick.aac"]);
var allAudioElements = [];
allAudioElements.push(audio_GUI_click);
allAudioElements.push(audio_lastWindow);
allAudioElements.push(audio_field_click);
allAudioElements.push(audio_object_down);
allAudioElements.push(audio_object_messeng);
allAudioElements.push(audio_scroll_click);
allAudioElements.push(audio_object_up);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------ГРАФИЧЕСКИЕ ПАРАМЕТРЫ-----------------------------------------------------------------
//ТЕКУЩИЙ ВЫБРАННЫЙ ГРАФИЧЕСКИЙ ПАК(ПО ИМЕНИ ПАПКИ В КОТОРОЙ НАХОДЯТСЯ РЕСУРСЫ В img/assets/...)
var currentAsset = "greenland";
//Параметры для внутриигрового текста
var textOnCodeMapColor = "#1f75fe";//Цвет цифр когда вводишь итерации в команду repeat
var textFont = "comic"; //шрифт текста
    if(selectLang == 'am')
        textFont = "armCup"
var guiTextColor = "red";//ЦВЕТ ТЕКСТА ДЛЯ GUI 

var totalLabCompleted = 0; //Счетчик пройденных лабиринтов
//Путь к файлам отображения ИНТЕРФЕЙСА И КОМАНД---------------------------------------
var nonePath = "img/commands/command_none.png";//Картинка пустой команды
var coinPath = "img/assets/"+currentAsset+"/field/object_battery.png"; //Картинка для отображения монетки
//Пути до файлов с изображениями для интерфейса-------------------------------
var cursorImgSrc = "img/assets/"+currentAsset+"/ui/cursor.png";
var clockPath = "img/interface/interface_clock.png";
var buttonStartImgSrc = "img/interface/interface_button_start.png";
var buttonStopImgSrc = "img/interface/interface_button_pause.png";
var menuButtonImgSrc = "img/interface/interface_button_menu.png";
var reloadButtonImgSrc = "img/interface/interface_button_reload.png";
var okButtonImgSrc = "img/interface/interface_button_ok.png";
var nextStepButtonImgSrc = "img/interface/interface_button_nextstep.png";
var prevStepButtonImgSrc = "img/interface/interface_button_prevstep.png";
var buttonDeleteImgSrc = "img/interface/interface_button_delete.png";
var buttonDialogImgSrc = "img/interface/interface_button_dialog_ok.png"
var buttonSaveImgSrc = "img/interface/interface_button_save.png"
var medalBronzeImgSrc = "img/interface/medal_bronze.png"
var medalSilverImgSrc = "img/interface/medal_silver.png"
var medalGoldImgSrc = "img/interface/medal_gold.png"
var saveCommandsSrc = "img/interface/save_commands.png"
//Пути для файлов для карты кода------------------------------------------------
var itemDeleteSrc = "img/interface/interface_codeview_delete.png";
var itemReplaceSrc = "img/interface/interface_codeview_replace.png";
var itemAddSrc = "img/interface/interface_codeview_add.png";
var itemMoveSrc = "img/interface/interface_codeview_move.png";
var itemPlusSrc = "img/interface/interface_codeview_plus.png";
//Файлы команд для карты кода---------------------------------------------------
var wallImgComm = "img/assets/"+currentAsset+"/commands/command_interact_wall.png";
var coinImgComm = "img/assets/"+currentAsset+"/commands/command_interact_coin.png";
var exitImgComm = "img/assets/"+currentAsset+"/commands/command_interact_exit.png";
var entryImgComm = "img/assets/"+currentAsset+"/commands/command_interact_entry.png";
var groundImgComm = "img/assets/"+currentAsset+"/commands/command_interact_road.png";
var lineImg = "img/commands/command_line.png";
//Пути до файлов с изображением робота--------------------------------------------
var playerImgSrc = "img/assets/"+currentAsset+"/field/object_player.png";
//Пути до файлов с изображением команд--------------------------------------------
var commandMovableImgSrc = "img/commands/command_code_move.png";//"img/commands/command_movable.png";
var commandNoneImgSrc = "img/commands/command_none.png";
var commandUpImgSrc = "img/commands/command_up.png";
var commandDownImgSrc = "img/commands/command_down.png";
var commandLeftImgSrc = "img/commands/command_left.png";
var commandRightImgSrc = "img/commands/command_right.png";
var commandClockwiseImgSrc = "img/commands/command_clockwise.png";
var commandUnClockwiseImgSrc = "img/commands/command_unclockwise.png";
var commandPickUpImgSrc = "img/commands/command_pickup.png";
var commandDropImgSrc = "img/commands/command_drop.png";
var commandCommandsBlockImgSrc = "img/commands/command_block_commands.png";
var commandWhatIsItImgSrc = "img/commands/command_whatisit.png";
var commandIfImgSrc = "img/commands/command_block_if.png";
var commandRepeatImgSrc = "img/commands/command_block_repeat.png";
var commandRepeatIfImgSrc = "img/commands/command_block_repeatif.png";
var commandBlockAImgSrc = "img/commands/command_block_a.png";
var commandBlockBImgSrc = "img/commands/command_block_b.png";
var commandBlockBDeleteImgSrc = "img/commands/command_block_b_delete.png";
var commandBlockBOrImgSrc = "img/commands/OR.png";
var commandBlockBOAndImgSrc = "img/commands/AND.png"
var commandCounterImgSrc = "img/commands/command_counter.png";
var commandOkImgSrc = "img/commands/command_ok.png";
var commandLookUpImgSrc = "img/commands/command_look_up.png";
var commandLookDownImgSrc = "img/commands/command_look_down.png";
var commandLookLeftImgSrc = "img/commands/command_look_left.png";
var commandLookRightImgSrc = "img/commands/command_look_right.png";
var commandLookCenterImgSrc = "img/commands/command_look_center.png";
var commandElseBlockImgSrc = "img/commands/command_block_else.png";
var commandForwardImgSrc = "img/commands/command_forward.png";
var commandOnLeftImgSrc = "img/commands/command_onleft.png";
var commandOnRightImgSrc = "img/commands/command_onright.png";
var commandBackwardImgSrc = "img/commands/command_backward.png";
var commandDigitsImgSrc = ["img/commands/command_digit_0.png",//Массив изображений для цифровой клавиатуры
"img/commands/command_digit_1.png",
"img/commands/command_digit_2.png",
"img/commands/command_digit_3.png",
"img/commands/command_digit_4.png",
"img/commands/command_digit_5.png",
"img/commands/command_digit_6.png",
"img/commands/command_digit_7.png",
"img/commands/command_digit_8.png",
"img/commands/command_digit_9.png"];
var commandBackspaceImgSrc = "img/commands/command_backspace.png";
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//Предзагрузка ВСЕХ КАРТИНОК-------------------------------------------------------------------------------------------------------------------------------------
//Картинки для графики
var graphicsImgs = [
    //картинки внутренных стен
    {
        code : 2,
        value : "img/assets/"+currentAsset+"/field/field_wall_roundDown.png"
    },
    {
        code : 3,
        value : "img/assets/"+currentAsset+"/field/field_wall_roundUp.png"
    },
    {
        code : 4,
        value : "img/assets/"+currentAsset+"/field/field_wall_roundRight.png"
    },
    {
        code : 5,
        value : "img/assets/"+currentAsset+"/field/field_wall_roundLeft.png"
    },
    {   code : 6,
        value : "img/assets/"+currentAsset+"/field/field_wall_corner_rightUp.png"
    },
    {   code : 777,
        value : "img/assets/"+currentAsset+"/field/field_wall_corner_leftUp.png"
    },
    {   code : 888,
        value : "img/assets/"+currentAsset+"/field/field_wall_corner_leftDown.png"
    },
    {   code : 999,
        value : "img/assets/"+currentAsset+"/field/field_wall_corner_rightDown.png"
    },
    {   code : 37,
        value : "img/assets/"+currentAsset+"/field/field_wall_T_down.png"
    },
    {   code : 38,
        value : "img/assets/"+currentAsset+"/field/field_wall_T_up.png"
    },
    {   code : 39,
        value : "img/assets/"+currentAsset+"/field/field_wall_T_left.png"
    },
    {   code : 40,
        value : "img/assets/"+currentAsset+"/field/field_wall_T_right.png"
    },
    {   code : 41,
        value : "img/assets/"+currentAsset+"/field/field_wall_straight_vertical.png"
    },
    {   code : 42,
        value : "img/assets/"+currentAsset+"/field/field_wall_straight_horizontal.png"
    },
    {   code : 43,
        value : "img/assets/"+currentAsset+"/field/field_wall_straight_intersection.png"
    },
    //
    //картинки дорог
    {   code : 10,
        value : "img/assets/"+currentAsset+"/field/field_road_straight_vertical.png"
    },
    {   code : 14,
        value : "img/assets/"+currentAsset+"/field/field_road_straight_horizontal.png"
    },
    {   code : 12,
        value : "img/assets/"+currentAsset+"/field/field_road_intersection.png"
    },
    {   code : 13,
        value : "img/assets/"+currentAsset+"/field/field_road_corner_rightUp.png"
    },
    {   code : 15,
        value : "img/assets/"+currentAsset+"/field/field_road_corner_leftDown.png"
    },
    {   code : 16,
        value : "img/assets/"+currentAsset+"/field/field_road_corner_leftUp.png"
    },
    {   code : 17,
        value : "img/assets/"+currentAsset+"/field/field_road_corner_rightDown.png"
    },
    {   code : 18,
        value : "img/assets/"+currentAsset+"/field/field_road_T_up.png"
    },
    {   code : 19,
        value : "img/assets/"+currentAsset+"/field/field_road_T_down.png"
    },
    {   code : 20,
        value : "img/assets/"+currentAsset+"/field/field_road_T_left.png"
    },
    {   code : 11,
        value : "img/assets/"+currentAsset+"/field/field_road_T_right.png"
    },
    {   code : 33,
        value : "img/assets/"+currentAsset+"/field/field_road_end_right.png"
    },
    {   code : 34,
        value : "img/assets/"+currentAsset+"/field/field_road_end_left.png"
    },
    {   code : 35,
        value : "img/assets/"+currentAsset+"/field/field_road_end_up.png"
    },
    {   code : 36,
        value : "img/assets/"+currentAsset+"/field/field_road_end_down.png"
    },
    //
    //картинки внешних стен
    {   code : 21,
        value : "img/assets/"+currentAsset+"/field/field_extWall_corner_leftUp.png"
    },
    {   code : 22,
        value : "img/assets/"+currentAsset+"/field/field_extWall_corner_rightDown.png"
    },
    {   code : 23,
        value : "img/assets/"+currentAsset+"/field/field_extWall_corner_rightUp.png"
    },
    {   code : 24,
        value : "img/assets/"+currentAsset+"/field/field_extWall_corner_leftDown.png"
    },
    {   code : 25,
        value : "img/assets/"+currentAsset+"/field/field_extWall_up.png"
    },
    {   code : 26,
        value : "img/assets/"+currentAsset+"/field/field_extWall_down.png"
    },
    {   code : 27,
        value : "img/assets/"+currentAsset+"/field/field_extWall_right.png"
    },
    {   code : 28,
        value : "img/assets/"+currentAsset+"/field/field_extWall_left.png"
    },
    {   code : 29,
        value : "img/assets/"+currentAsset+"/field/field_extWall_T_right.png"
    },
    {   code : 30,
        value : "img/assets/"+currentAsset+"/field/field_extWall_T_left.png"
    },
    {   code : 31,
        value : "img/assets/"+currentAsset+"/field/field_extWall_T_up.png"
    },
    {   code : 32,
        value : "img/assets/"+currentAsset+"/field/field_extWall_T_down.png"
    },
    //
    //старт и финиш
    {   code : 44,
        value : "img/assets/"+currentAsset+"/field/field_start_up.png"
    },
    {   code : 45,
        value : "img/assets/"+currentAsset+"/field/field_start_down.png"
    },
    {   code : 46,
        value : "img/assets/"+currentAsset+"/field/field_start_right.png"
    },
    {   code : 47,
        value : "img/assets/"+currentAsset+"/field/field_start_left.png"
    },
    {   code : 48,
        value : "img/assets/"+currentAsset+"/field/field_finish_up.png"
    },
    {   code : 49,
        value : "img/assets/"+currentAsset+"/field/field_finish_down.png"
    },
    {   code : 50,
        value : "img/assets/"+currentAsset+"/field/field_finish_right.png"
    },
    {   code : 51,
        value : "img/assets/"+currentAsset+"/field/field_finish_left.png"
    },
    //

];
//Массив картинок команд и интерфейса
var arrInterfaceAndCommandsImagesForLoad = [
    nonePath, 
    coinPath, 
    cursorImgSrc, 
    clockPath, 
    buttonStartImgSrc, 
    buttonStopImgSrc, 
    menuButtonImgSrc, 
    reloadButtonImgSrc, 
    okButtonImgSrc, 
    nextStepButtonImgSrc, 
    prevStepButtonImgSrc, 
    buttonDeleteImgSrc, 
    buttonDialogImgSrc, 
    buttonSaveImgSrc, 
    medalBronzeImgSrc, 
    medalSilverImgSrc, 
    medalGoldImgSrc, 
    saveCommandsSrc, 
    itemDeleteSrc, 
    itemReplaceSrc, 
    itemAddSrc, 
    itemMoveSrc, 
    itemPlusSrc, 
    wallImgComm, 
    coinImgComm, 
    exitImgComm, 
    entryImgComm, 
    groundImgComm, 
    lineImg, 
    playerImgSrc, 
    commandMovableImgSrc,
    commandNoneImgSrc, 
    commandUpImgSrc, 
    commandDownImgSrc, 
    commandLeftImgSrc, 
    commandRightImgSrc, 
    commandClockwiseImgSrc, 
    commandUnClockwiseImgSrc, 
    commandPickUpImgSrc, 
    commandDropImgSrc, 
    commandCommandsBlockImgSrc, 
    commandWhatIsItImgSrc, 
    commandIfImgSrc, 
    commandRepeatImgSrc, 
    commandRepeatIfImgSrc, 
    commandBlockAImgSrc, 
    commandBlockBImgSrc, 
    commandBlockBDeleteImgSrc, 
    commandBlockBOrImgSrc, 
    commandBlockBOAndImgSrc, 
    commandCounterImgSrc, 
    commandOkImgSrc, 
    commandLookUpImgSrc, 
    commandLookDownImgSrc, 
    commandLookLeftImgSrc, 
    commandLookRightImgSrc, 
    commandLookCenterImgSrc, 
    commandElseBlockImgSrc, 
    commandForwardImgSrc,
    commandOnLeftImgSrc, 
    commandOnRightImgSrc, 
    commandBackwardImgSrc, 
    commandDigitsImgSrc[0],
    commandDigitsImgSrc[1],
    commandDigitsImgSrc[2],
    commandDigitsImgSrc[3],
    commandDigitsImgSrc[4],
    commandDigitsImgSrc[5],
    commandDigitsImgSrc[6],
    commandDigitsImgSrc[7],
    commandDigitsImgSrc[8],
    commandDigitsImgSrc[9],
    commandBackspaceImgSrc 
];
//Загружаем картинки для графического сета лабиринта
graphicsImgs.forEach(function(e){
    new Image().src = e.value;
});
//Загружаем картинки интерфеса и команд
arrInterfaceAndCommandsImagesForLoad.forEach(function(e){
    new Image().src = e;
});
//Загружаем картинки нажатого интерфейса и команд
arrInterfaceAndCommandsImagesForLoad.forEach(function (e) {
    var path = e.split(".png")[0] + "_pressed.png";
    new Image().src = path;
});
//Загружаем задний фон
new Image().src = backgroundImgPath;