document.addEventListener("DOMContentLoaded", function () {
    const notificationItems = [
        { category: "exams", date: "2024-04-27", message: "Midterm exam for Math on April 27th, 2024." },
        { category: "exams", date: "2024-05-05", message: "Final exam for Science on May 5th, 2024." },
        { category: "submissions", date: "2024-05-10", message: "Project submission due on May 10th, 2024." },
        { category: "submissions", date: "2024-05-15", message: "Assignment submission deadline on May 15th, 2024." },
        { category: "hackathons", date: "2024-06-01", message: "Tech hackathon event on June 1st, 2024." },
        { category: "hackathons", date: "2024-06-10", message: "Hackathon competition registration deadline on June 10th, 2024." },
        { category: "webinars", date: "2024-06-15", message: "Webinar on latest technology trends on June 15th, 2024." },
        { category: "webinars", date: "2024-07-01", message: "Interactive webinar session on July 1st, 2024." },
        { category: "seminars", date: "2024-07-10", message: "Seminar on career development on July 10th, 2024." },
        { category: "seminars", date: "2024-07-15", message: "Guest seminar by industry experts on July 15th, 2024." },
        { category: "cultural", date: "2024-07-20", message: "Cultural festival celebration on July 20th, 2024." },
        { category: "cultural", date: "2024-07-25", message: "Annual cultural event participation on July 25th, 2024." },
        { category: "tech-fest", date: "2024-08-01", message: "Tech fest activities begin on August 1st, 2024." },
        { category: "tech-fest", date: "2024-08-10", message: "Tech fest competition registration closes on August 10th, 2024." }
    ];

    const notificationList = document.getElementById("notification-items");

    function generateNotificationItem(notification) {
        const item = document.createElement("li");
        item.classList.add("notification-item");
        item.innerHTML = `
            <h3>${notification.category}</h3>
            <p><span class="category">${notification.category}</span> - <span class="date">${notification.date}</span></p>
            <p>${notification.message}</p>
        `;
        return item;
    }

    function renderNotificationItems(items) {
        notificationList.innerHTML = "";
        items.forEach(item => {
            const listItem = generateNotificationItem(item);
            notificationList.appendChild(listItem);
        });
    }

    // Initial render
    renderNotificationItems(notificationItems);

    // Filter and sort options
    const sortBySelect = document.getElementById("sort-by");
    const filterBySelect = document.getElementById("filter-by");

    sortBySelect.addEventListener("change", function () {
        const sortBy = sortBySelect.value;
        if (sortBy === "date") {
            notificationItems.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sortBy === "category") {
            notificationItems.sort((a, b) => a.category.localeCompare(b.category));
        }
        renderNotificationItems(notificationItems);
    });

    filterBySelect.addEventListener("change", function () {
        const filterBy = filterBySelect.value;
        if (filterBy === "all") {
            renderNotificationItems(notificationItems);
        } else {
            const filteredItems = notificationItems.filter(item => item.category === filterBy);
            renderNotificationItems(filteredItems);
        }
    });

    // Refresh button
    const refreshBtn = document.getElementById("refresh-btn");
    refreshBtn.addEventListener("click", function () {
        renderNotificationItems(notificationItems);
    });
});
