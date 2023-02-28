
document.getElementById('btnGetCard').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    let i = initPerson.familyName.length;

    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    // document.getElementById('familyNameOutput').innerText = initPerson.familyName;
    document.getElementById('birthYearOutput').innerText = initPerson.dateOfBirth;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('profession').innerText = initPerson.profession;

    if (document.querySelector('#genderOutput').innerText == 'Женщина'){
        document.querySelector('#surnameOutput').innerText = initPerson.surname + 'а';

        // окончаниe отчества
        if (initPerson.familyName[i-1] == 'й'){
            document.querySelector('#familyNameOutput').innerText = initPerson.familyName.substring(0, initPerson.familyName.length - 1) + 'евна';
        }else if (initPerson.familyName[i-1] == 'а'){
            document.querySelector('#familyNameOutput').innerText = initPerson.familyName.substring(0, initPerson.familyName.length - 1) + 'ична';
        } else{
            document.querySelector('#familyNameOutput').innerText = initPerson.familyName.substring(0, initPerson.familyName.length) + 'овна';
        }
    }else{
        document.querySelector('#familyNameOutput').innerText = initPerson.surName;
        if (initPerson.familyName[i-1] == 'й'){
            document.querySelector('#familyNameOutput').innerText = initPerson.familyName.substring(0, initPerson.familyName.length - 1) + 'евич';
        }else if (initPerson.familyName[i-1] == 'а'){
            document.querySelector('#familyNameOutput').innerText = initPerson.familyName.substring(0, initPerson.familyName.length - 1) + 'ич';
        } else{
            document.querySelector('#familyNameOutput').innerText = initPerson.familyName.substring(0, initPerson.familyName.length) + 'ович';
        }
    }
    document.querySelector('#birthYearOutput').innerText = initPerson.dateOfBirth;
});

document.getElementById('btnClear').addEventListener('click', function() {
    // location.reload()
    document.getElementById('firstNameOutput').innerText = "Имя";
    document.getElementById('surnameOutput').innerText = "Фамилия";
    document.getElementById('familyNameOutput').innerText = " Отчетсво";
    document.getElementById('birthYearOutput').innerText = " дата рождения";
    document.getElementById('genderOutput').innerText = "Пол";
    document.getElementById('profession').innerText = "Профессия";
});
