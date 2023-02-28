const personGenerator = {
    surnameMaleJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Валентин",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мария",
            "id_2": "Анна",
            "id_3": "Виктория",
            "id_4": "Анастасия",
            "id_5": "Алиса",
            "id_6": "Полина",
            "id_7": "Елизавета",
            "id_8": "Александра",
            "id_9": "Дарья",
            "id_10": "Варвара"
        }
    }`,
    // familyMaleNameJson: `{
    //     "count": 10,
    //     "list": {
    //         "id_1": " Александрович",
    //         "id_2": " Максимович",
    //         "id_3": " Васильевич",
    //         "id_4": " Артемович",
    //         "id_5": " Дмитриевич",
    //         "id_6": " Алексеевич",
    //         "id_7": " Витальевич",
    //         "id_8": " Николаевич",
    //         "id_9": " Сергеевич",
    //         "id_10": " Андреевич"
    //     }
    // }`,
    // familyFemaleNameJson: `{
    //     "count": 10,
    //     "list": {
    //         "id_1": " Анатольевна",
    //         "id_2": " Аркадьевна",
    //         "id_3": " Геннадиевна",
    //         "id_4": " Денисовна",
    //         "id_5": " Ивановна",
    //         "id_6": " Николаевна",
    //         "id_7": " Робертовна",
    //         "id_8": " Степановна",
    //         "id_9": " Эдуардовна",
    //         "id_10": " Юрьевна"
    //     }
    // }`,
    dateOfBirthJson: `{
        "count": 10,
        "list": {
            "id_1": " 1984",
            "id_2": " 1979",
            "id_3": " 1988",
            "id_4": " 1995",
            "id_5": " 2001",
            "id_6": " 1999",
            "id_7": " 1975",
            "id_8": " 1980",
            "id_9": " 1997",
            "id_10": " 1969"
        }
    }`,
    FemaleProfessionsJson: `{
        "count": 10,
        "list": {
            "id_1": "Секретарь – референт",
            "id_2": "Копирайтер",
            "id_3": "Педагог",
            "id_4": "Bоспитатель",
            "id_5": "Контекстолог",
            "id_6": "SMM – менеджер",
            "id_7": "Email – маркетолог",
            "id_8": "Стоматолог",
            "id_9": "Дизайнер интерфейсов",
            "id_10": "Агроэколог"
        }
    }`,
   maleProfessionsJson: `{
        "count": 10,
        "list": {
            "id_1": "Cистемный администратор",
            "id_2": "Биржевой аналитик",
            "id_3": "Адвокат, юрисконсульт",
            "id_4": "Маркетолог, специалист по рекламе",
            "id_5": "Аудитор",
            "id_6": "Кризисный управляющий",
            "id_7": "Архитектор",
            "id_8": "Стоматолог",
            "id_9": "Врач",
            "id_10": "Военнослужащий"
        }
    }`,
    genderJson: `{
        "count": 2,
        "list": {
            "id_1": "Мужчина",
            "id_2": "Женщина"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == "Мужчина") {
        return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomGender: function() {
        if (this.person.gender == "Мужчина"){
        return this.randomValue(this.genderJson);
        } else {
            return this.randomValue(this.genderJson);
        }
    },


    randomSurname: function() {
 
        return this.randomValue(this.surnameMaleJson);
    },

    randomFamilyName: function() {
        
        return this.randomValue(this.firstNameMaleJson);
        
    },

    randomDateOfBirth: function() {

            var birthDay = new Date(this.randomIntNumber(1965,2001), this.randomIntNumber(1,12), this.randomIntNumber(1,30));

            return birthDay.toLocaleDateString('ru',{day: 'numeric', month: 'long', year: 'numeric'});

    },

    randomProfession: function() {
        if (this.person.gender == "Мужчина") {
            return this.randomValue(this.maleProfessionsJson);
        } else {
            return this.randomValue(this.FemaleProfessionsJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        // this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.familyName = this.randomFamilyName();
        this.person.dateOfBirth = this.randomDateOfBirth();
        this.person.profession = this.randomProfession();
        return this.person;
    },

    clearCard: function () {
        this.person = {};
        this.person.gender = "Пол";
        this.person.firstName = "Имя ";
        this.person.surname = "Фамилия";
        this.person.familyName = "Отчество";
        this.person.dateOfBirth = "дата рождения";
        this.person.profession = "Профессия";
        return this.person;
    }
};