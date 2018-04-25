var selectLang = 'ru';
//Подгружаем настройки языка из настроек
if (localStorage.getItem("settings")) {
    var lang = JSON.parse(localStorage.getItem("settings")).language;
    if (lang)
        selectLang = lang;
}

var lang = {
    ru : {
       'robot_not_know'  : 'Робот не знает что ему делать',
       'inventory_is_empty' : 'Инвентарь робота пуст',
       'robot_not_look_there': 'Робот смотрит не в ту сторону',
       'robot_left_condition_if': 'Не задано условие в операторе условия ЕСЛИ',
       'robot_left_condition_repeatif': 'Не задано условие в ЦИКЛЕ',
       'robot_left_counter_countblock': 'Не задано количество итераций в ЦИКЛЕ',
       'crashed_the_wall' : 'Робот врезался в стену',
       'robot_not_find_object' : 'Робот не может найти объект который можно подобрать',
       'game_title' : 'SkillCraft - развивайся играя',
        'robot_is_waiting' : 'Робот остановился и ждет дальнейших команд',
        'robot_enter_infinity_cycle' : 'Робот зашёл в бесконечный цикл. Дальнейшее выполнение невозможно',
        'dialog_delete' : 'Удалить?',
        'tooltip_robot': 'Это робот',
        'achievement_optimal_route': 'КРАТЧАЙШИЙ ПУТЬ',
        'achievement_no_errors': 'ПРОХОЖДЕНИЕ БЕЗ ОШИБОК',
        'achievement_all_boxes': 'СОБРАНЫ ВСЕ ЯЩИКИ',
        'gui_inp_name': 'Введите название',
        'gui_save': 'Сохранить',
        'gui_cancel': 'Отменить',
        'gui_yes': 'Да',
        'gui_no': 'Нет',
        'gui_level': 'Уровень: ',
        'gui_total_lab_complete': 'Всего лабиринтов пройдено: ',
        'gui_total_time': 'Время прохождения: ',
        'gui_achiv': 'Достижения:',
        'mainmenu_newgame': 'Новая игра',
        'mainmenu_continue': 'Продолжить',
        'mainmenu_settings': 'Настройки',
        'mainmenu_login': 'Введите логин',
        'mainmenu_password': 'Введите пароль',
        'mainmenu_logpass': 'Войти/Регистрация',
        'mainmenu_version': 'Версия игры : ',
        'mainmenu_sure': 'Вы Уверены? Весь несохраненный прогресс исчезнет',
    },
    en : {
        'robot_not_know': 'Robot doesn\'t now what to do',
        'inventory_is_empty': 'Inventory is empty',
        'robot_not_look_there': 'Robot looks the wrong side',
        'robot_left_condition_if': 'There is no condition in IF command',
        'robot_left_condition_repeatif': 'There is no condition in CYCLE command',
        'robot_left_counter_countblock': 'Number of steps in a CYCLE command is not specified',
        'crashed_the_wall': 'Robot crashed the wall',
        'robot_not_find_object': 'There is no object that the robot could pick up',
        'game_title': 'SkillCraft - learn while playing',
        'robot_is_waiting': 'Robot stopped and waits for further commands',
        'robot_enter_infinity_cycle': 'The robot entered an endless loop. Further execution is not possible',
        'dialog_delete': 'Delete?',
        'tooltip_robot': 'This is robot',
        'achievement_optimal_route': 'SHORTEST WAY',
        'achievement_no_errors': 'NO ERRORS',
        'achievement_all_boxes': 'ALL BOXES COLLECTED',
        'gui_inp_name': 'Enter the name',
        'gui_save': 'Save',
        'gui_cancel': 'Cancel',
        'gui_yes': 'Yes',
        'gui_no': 'No',
        'gui_level': 'Level: ',
        'gui_total_lab_complete': 'Total labyrinth completed: ',
        'gui_total_time': 'Total time: ',
        'gui_achiv': 'Achievements:',
        'mainmenu_newgame': 'New game',
        'mainmenu_continue': 'Continue',
        'mainmenu_settings': 'Settings',
        'mainmenu_login': 'Login',
        'mainmenu_password': 'Password',
        'mainmenu_logpass': 'Login/Register',
        'mainmenu_version': 'Version : ',
        'mainmenu_sure': 'Are you sure? All unsaved progress will disappear',
    },
}
