const byuiCourse = {
    courseCode: "WDD231",
    name: "Web Frontend Development I",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' },
    ],


    changeEnrollment: function (sectionNumber, add = true) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNumber == sectionNumber
        );
        if (sectionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }

        }
    },
};

export default byuiCourse;