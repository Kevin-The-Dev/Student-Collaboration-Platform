document.addEventListener('DOMContentLoaded', function () {
    renderCalendar();
  });
  
  let currentMonth = 2; // March
  let currentYear = new Date().getFullYear();
  
  // Student attendance data for March (Monday to Friday only)
  const studentAttendance = {
    3: { // March
      1: 'absent',  // 1st March, student was absent
      4: 'present', // 4th March, student was present
      5: 'absent',  // 5th March, student was absent
      6: 'present', // 6th March, student was present
      7: 'absent',  // 7th March, student was absent
      8: 'absent',  // 8th March, student was absent
      11: 'present', // 11th March, student was present
      12: 'present', // 12th March, student was present
      13: 'present', // 13th March, student was present
      14: 'absent',  // 14th March, student was absent
      15: 'present', // 15th March, student was present
      18: 'present', // 18th March, student was present
      19: 'absent',  // 19th March, student was absent
      20: 'present', // 20th March, student was present
      21: 'absent',  // 21st March, student was absent
      22: 'absent',  // 22nd March, student was absent
      25: 'present', // 25th March, student was present
      26: 'absent',  // 26th March, student was absent
      27: 'absent',  // 27th March, student was absent
      28: 'absent',  // 28th March, student was absent
      29: 'absent'   // 29th March, student was absent
    }
  };
  
  // Sample data for upcoming events
  const upcomingEvents = {
    3: { // March
      15: ['Exam Submission', 'Seminar on AI'], // 16th March, Exam Submission & Seminar on AI
      20: ['Tech Fest'], // 21st March, Tech Fest
      25: ['Cultural Fest', 'Webinar on Entrepreneurship'] // 26th March, Cultural Fest & Webinar on Entrepreneurship
    }
  };
  
  function renderCalendar() {
    const calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = ''; // Clear previous content
  
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    // Header
    const header = document.createElement('div');
    header.classList.add('calendar-header');
    header.innerText = `${getMonthName(currentMonth)} ${currentYear}`;
    calendarElement.appendChild(header);
  
    // Days Grid
    const calendarGrid = document.createElement('div');
    calendarGrid.classList.add('calendar-grid');
    calendarElement.appendChild(calendarGrid);
  
    // Days of Week
    for (let day of daysOfWeek) {
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.innerText = day;
      calendarGrid.appendChild(dayElement);
    }
  
    // Previous Month Days
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDayOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = firstDayOfMonth; i > 0; i--) {
      const dayElement = document.createElement('div');
      dayElement.classList.add('day', 'other-month');
      dayElement.innerText = lastDayOfPrevMonth - i + 1;
      calendarGrid.appendChild(dayElement);
    }
  
    // Current Month Days
    for (let i = 1; i <= daysInMonth; i++) {
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.innerText = i;
      calendarGrid.appendChild(dayElement);
  
      // Mark student attendance if available
      if (studentAttendance[currentMonth + 1] && studentAttendance[currentMonth + 1][i]) {
        const status = studentAttendance[currentMonth + 1][i];
        dayElement.classList.add(status);
      }
  
      // Display upcoming events if available
      if (upcomingEvents[currentMonth + 1] && upcomingEvents[currentMonth + 1][i]) {
        const events = upcomingEvents[currentMonth + 1][i];
        const eventsList = document.createElement('ul');
        eventsList.classList.add('events-list');
        events.forEach(event => {
          const eventItem = document.createElement('li');
          eventItem.innerText = event;
          eventsList.appendChild(eventItem);
        });
        dayElement.appendChild(eventsList);
      }
    }
  }
  
  function getMonthName(monthIndex) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
  }
  
  // Event listeners for navigation buttons
  document.querySelector('.prev').addEventListener('click', function () {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear--;
    } else {
      currentMonth--;
    }
    renderCalendar();
  });
  
  document.querySelector('.next').addEventListener('click', function () {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear++;
    } else {
      currentMonth++;
    }
    renderCalendar();
  });
  