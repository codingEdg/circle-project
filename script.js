const body = document.getElementsByTagName('body')[0];
let count = 0;
let circle1, circle2;

document.addEventListener("click", function(e) {
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;
    const random = Math.max(10, Math.floor((Math.random() * 100) + 1));
    
    if (count == 1) {
        count = count + 1;
        circle2 = document.createElement("div");
        circle2.classList.add("circle1");
        circle2.style.left = `${x - random / 2}px`; // Adjust left position
        circle2.style.top = `${y - random / 2}px`; // Adjust top position
        body.appendChild(circle2);
        circle2.style.width = `${random}px`;
        circle2.style.height = `${random}px`;
        circle2.style.transform = `translate(-50%, -50%)`; // Center the circle using transform
        let area =  checkIntersection(circle1, circle2);
        if(area) alert("Circle intersect area : " + area);

    } else if (count == 0) {
        count = count + 1;
        circle1 = document.createElement("div");
        circle1.classList.add("circle1");
        circle1.style.left = `${x - random / 2}px`; // Adjust left position
        circle1.style.top = `${y - random / 2}px`; // Adjust top position
        body.appendChild(circle1);
        circle1.style.width = `${random}px`;
        circle1.style.height = `${random}px`;
        circle1.style.transform = `translate(-50%, -50%)`; // Center the circle using transform
    } else {
        count = 0;
        body.removeChild(circle1);
        body.removeChild(circle2);
    }
});

function checkIntersection(circle1, circle2) {
    const rect1 = circle1.getBoundingClientRect();
    const rect2 = circle2.getBoundingClientRect();
    
    const dx = rect1.x - rect2.x;
    const dy = rect1.y - rect2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < (rect1.width / 2 + rect2.width / 2)) {
        const intersectionArea = calculateIntersectionArea(rect1.width, rect2.width, distance);
        drawIntersection(rect1, rect2, distance);
        return Math.floor(intersectionArea);
    }
    return 0;
}

function calculateIntersectionArea(radius1, radius2, distance) {
    const r1Square = radius1 * radius1;
    const r2Square = radius2 * radius2;
    const dSquare = distance * distance;

    const angle1 = Math.acos((r1Square + dSquare - r2Square) / (2 * radius1 * distance));
    const angle2 = Math.acos((r2Square + dSquare - r1Square) / (2 * radius2 * distance));
    
    const area1 = r1Square * angle1;
    const area2 = r2Square * angle2;
    
    const intersectionArea = area1 - 0.5 * r1Square * Math.sin(2 * angle1) + area2 - 0.5 * r2Square * Math.sin(2 * angle2);
    
    return intersectionArea;
}

function drawIntersection(rect1, rect2, distance) {
    const intersectionRadius = Math.min(rect1.width / 2, rect2.width / 2, distance);
    intersectionCircle = document.createElement("div");
    intersectionCircle.classList.add("intersection-circle");
    intersectionCircle.style.left = `${rect1.x - intersectionRadius}px`;
    intersectionCircle.style.top = `${rect1.y - intersectionRadius}px`;
    intersectionCircle.style.width = `${2 * intersectionRadius}px`;
    intersectionCircle.style.height = `${2 * intersectionRadius}px`;
    body.appendChild(intersectionCircle);
}