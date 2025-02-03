const createTask = () => {
    const taskDate = document.getElementById("txt-date").value;
    const taskTitle = document.getElementById("txt-title").value;
    const taskDesc = document.getElementById("txt-description").value;

    if (taskDate === "" || taskTitle === "" || taskDesc === "") {
        return false;
    }

    // no task records yet
    if (localStorage.getItem("taskRecords") === null) {
        localStorage.setItem("taskRecords",
            JSON.stringify(
                [
                    {
                        title: document.getElementById("txt-title").value,
                        description: document.getElementById("txt-description").value,
                        taskDate: new Date(document.getElementById("txt-date").value),
                        status: "incomplete"
                    }
                ]
            )
        );
    // task records exists    
    } else {
        let tempTaskRecords = JSON.parse(localStorage.getItem("taskRecords"));

        tempTaskRecords.push(
            {
                title: document.getElementById("txt-title").value,
                description: document.getElementById("txt-description").value,
                taskDate: new Date(document.getElementById("txt-date").value),
                status: "incomplete"
            }            
        );

        localStorage.setItem("taskRecords",JSON.stringify(tempTaskRecords));


    }

    alert("Task Created Successfully!");
    populateTable();
}

// this function is called after the page is loaded and after each update,delete and add record 
const populateTable = () => {
    if (localStorage.getItem("taskRecords") !== null) {
        let recordsHTML = 
            '<tr> ' +
            '<th>Title</th> ' +
            '<th>Description</th> ' +
            '<th>Date</th> ' +
            '<th> ' +
            '    <center>Action</center> ' +
            '</th> ' +
            '</tr> ';
        
        const taskRecords = JSON.parse(localStorage.getItem("taskRecords"));

        if(taskRecords.length == 0) {
            recordsHTML +=  '<tr><td colspan="4"><center>No records to display</center></td></tr>';
        }
        
        taskRecords.forEach(function(obj, index)  {
            let taskDate = new Date(obj.taskDate);

            recordsHTML +=
            
            '<tr> ' +
            '<td class="' + obj.status +'">'+ obj.title +'</td> ' +
            '<td class="' + obj.status +'">'+ obj.description +'</td> ' +
            '<td class="' + obj.status +'">'+ taskDate.getFullYear() + '-' +  
                (taskDate.getMonth() + 1).toString().padStart(2, '0') + '-' + 
                taskDate.getDate().toString().padStart(2, '0') +'</td> ' +
            '<td class="justify"> ' +
            '    <button class="btn-edit-task" onclick="showEditTask(' + index + ')" >Edit</button> ' +
            '    <button class="btn-delete-task" onclick="deleteTask('+ index +')">Delete</button> ' +
            '    <button class="btn-complete-task" onclick="completeTask('+ index +')">Mark Complete</button> ' +
            '</td> ' +
            '</tr> ';
        });

        document.getElementById("tbl-tasks").innerHTML = recordsHTML;
    }
}

const deleteTask = (index) => {
    let tempTaskRecords = JSON.parse(localStorage.getItem("taskRecords"));
    if(confirm("Confirm Delete Task with Title: " + tempTaskRecords[index].title)) {
        hidEditTask();
        tempTaskRecords.splice(index, 1);
        localStorage.setItem("taskRecords",JSON.stringify(tempTaskRecords));
        populateTable();
    }
}

const completeTask = (index) => {
    let tempTaskRecords = JSON.parse(localStorage.getItem("taskRecords"));
    if(confirm("Confirm Complete Task with Title: " + tempTaskRecords[index].title)) {
        hidEditTask();
        
        tempTaskRecords[index].status = "completed";
        localStorage.setItem("taskRecords",JSON.stringify(tempTaskRecords));
        populateTable();
    }   
}

const showEditTask = (index) => {
    document.getElementById("frm-edit-task").style.display = "block";
    document.getElementById("frm-add-task").style.display = "none";

    const taskRecords = JSON.parse(localStorage.getItem("taskRecords"));
    const taskDate = new Date(taskRecords[index].taskDate);

    document.getElementById("txt-title-edit").value = taskRecords[index].title;
    document.getElementById("txt-description-edit").value = taskRecords[index].description;
    document.getElementById("txt-date-edit").value =  
        taskDate.getFullYear() + "-" + 
        (taskDate.getMonth() + 1).toString().padStart(2, '0') + "-" + 
        taskDate.getDate().toString().padStart(2, '0');
    document.getElementById("btn-edit-task-record").setAttribute("data-index", index);
    document.getElementById("btn-edit-task-record").setAttribute("onclick", "updateTask(" + index + ")");
}

const hidEditTask = () => {
    document.getElementById("frm-edit-task").style.display = "none";
    document.getElementById("frm-add-task").style.display = "block";
}

const updateTask = (index) => {
    if(confirm("Confirm Update Task")) {
        hidEditTask();
        let tempTaskRecords = JSON.parse(localStorage.getItem("taskRecords"));
        tempTaskRecords[index].title = document.getElementById("txt-title-edit").value;
        tempTaskRecords[index].description = document.getElementById("txt-description-edit").value;
        tempTaskRecords[index].taskDate = document.getElementById("txt-date-edit").value;
        localStorage.setItem("taskRecords",JSON.stringify(tempTaskRecords));
        populateTable();
    }
}

const changeSelection = () => {
    let filter = document.getElementById("sel-task-filter" ).value;
    let tempTaskRecords = JSON.parse(localStorage.getItem("taskRecords"));

    var filteredTask;

    if(filter === "completed") {
        filteredTask = tempTaskRecords.filter(filterCompleted);
    } else if (filter === "incomplete") {
        filteredTask = tempTaskRecords.filter(filterIncomplete);
    } else {
        populateTable();
        return;
    }

    let recordsHTML = 
    '<tr> ' +
    '<th>Title</th> ' +
    '<th>Description</th> ' +
    '<th>Date</th> ' +
    '<th> ' +
    '    <center>Action</center> ' +
    '</th> ' +
    '</tr> ';

    filteredTask.forEach(function(obj, index)  {
        let taskDate = new Date(obj.taskDate);

        recordsHTML +=
        
        '<tr> ' +
        '<td class="' + obj.status +'">'+ obj.title +'</td> ' +
        '<td class="' + obj.status +'">'+ obj.description +'</td> ' +
        '<td class="' + obj.status +'">'+ taskDate.getFullYear() + '-' +  
            (taskDate.getMonth() + 1).toString().padStart(2, '0') + '-' + 
            taskDate.getDate().toString().padStart(2, '0') +'</td> ' +
        '<td class="justify"> ' +
        '    <button class="btn-edit-task" onclick="showEditTask(' + index + ')" >Edit</button> ' +
        '    <button class="btn-delete-task" onclick="deleteTask('+ index +')">Delete</button> ' +
        '    <button class="btn-complete-task" onclick="completeTask('+ index +')">Mark Complete</button> ' +
        '</td> ' +
        '</tr> ';
    });

    document.getElementById("tbl-tasks").innerHTML = recordsHTML;    

    
}

const filterCompleted = (tasks) => {
    return tasks.status === "completed";
}

const filterIncomplete = (tasks) => {
    return tasks.status === "incomplete";
}

function performSearch() {
    const searchText = document.getElementById("txt-search").value.toLowerCase();

    let tempTaskRecords = JSON.parse(localStorage.getItem("taskRecords"));

    let tempTaskRecordsWithId = [];

    tempTaskRecords.forEach(function(obj, index)  {
        tempTaskRecordsWithId.push(
            {
                id: index,
                title: obj.title,
                description: obj.description,
                taskDate: obj.taskDate
            }
        );
    });

    const filteredData = tempTaskRecordsWithId.filter(item => 
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.taskDate.toLowerCase().includes(searchText)
    );

    let recordsHTML = 
    '<tr> ' +
    '<th>Title</th> ' +
    '<th>Description</th> ' +
    '<th>Date</th> ' +
    '<th> ' +
    '    <center>Action</center> ' +
    '</th> ' +
    '</tr> ';

    filteredData.forEach(function(obj)  {
        let taskDate = new Date(obj.taskDate);

        recordsHTML +=
        
        '<tr> ' +
        '<td class="' + obj.status +'">'+ obj.title +'</td> ' +
        '<td class="' + obj.status +'">'+ obj.description +'</td> ' +
        '<td class="' + obj.status +'">'+ taskDate.getFullYear() + '-' +  
            (taskDate.getMonth() + 1).toString().padStart(2, '0') + '-' + 
            taskDate.getDate().toString().padStart(2, '0') +'</td> ' +
        '<td class="justify"> ' +
        '    <button class="btn-edit-task" onclick="showEditTask(' + obj.id + ')" >Edit</button> ' +
        '    <button class="btn-delete-task" onclick="deleteTask('+ obj.id +')">Delete</button> ' +
        '    <button class="btn-complete-task" onclick="completeTask('+ obj.id +')">Mark Complete</button> ' +
        '</td> ' +
        '</tr> ';
    });

    document.getElementById("tbl-tasks").innerHTML = recordsHTML;    
}