
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // CSV FILE UPLOAD
    // =====================================

    const fileInput = document.getElementById("csv-file");
    const uploadArea = document.getElementById("upload-area");
    const fileInfo = document.getElementById("file-info");
    const fileName = document.getElementById("file-name");
    const fileSize = document.getElementById("file-size");

    const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 MB

    function displayFile(file) {

        if (!file) return;

        const extension = file.name.split(".").pop().toLowerCase();

        if (extension !== "csv") {
            alert("Please select a CSV file.");
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            alert("File size must not exceed 50 MB.");
            return;
        }

        if (fileInput) {
            const transfer = new DataTransfer();
            transfer.items.add(file);
            fileInput.files = transfer.files;
        }

        if (fileName) {
            fileName.textContent = file.name;
        }

        if (fileSize) {
            fileSize.textContent = formatFileSize(file.size);
        }

        if (fileInfo) {
            fileInfo.hidden = false;
        }
    }


    function formatFileSize(bytes) {

        if (bytes < 1024) {
            return bytes + " B";
        }

        if (bytes < 1024 * 1024) {
            return (bytes / 1024).toFixed(1) + " KB";
        }

        return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    }


    if (fileInput) {

        fileInput.addEventListener("change", () => {
            const file = fileInput.files[0];
            displayFile(file);
        });

    }


    // =====================================
    // DRAG AND DROP
    // =====================================

    if (uploadArea && fileInput) {

        uploadArea.addEventListener("click", (event) => {

            if (event.target.closest("button, a")) return;

            fileInput.click();

        });


        uploadArea.addEventListener("dragover", (event) => {

            event.preventDefault();
            uploadArea.classList.add("drag-active");

        });


        uploadArea.addEventListener("dragleave", () => {

            uploadArea.classList.remove("drag-active");

        });


        uploadArea.addEventListener("drop", (event) => {

            event.preventDefault();

            uploadArea.classList.remove("drag-active");

            const file = event.dataTransfer.files[0];

            displayFile(file);

        });

    }


    // =====================================
    // TARGET COLUMN SELECTION
    // =====================================

    const targetSelect = document.getElementById("target-column");

    if (targetSelect) {

        targetSelect.addEventListener("change", () => {

            const selectedColumn = targetSelect.value;

            const targetDisplay =
                document.getElementById("selected-target");

            if (targetDisplay) {
                targetDisplay.textContent =
                    selectedColumn || "No target selected";
            }

        });

    }


    // =====================================
    // MODEL TRAINING UI
    // =====================================

    const trainingForm = document.getElementById("training-form");
    const trainButton = document.getElementById("train-button");
    const progressContainer =
        document.getElementById("training-progress");

    const progressBar =
        document.getElementById("progress-bar");

    const progressText =
        document.getElementById("progress-text");


    if (trainingForm) {

        trainingForm.addEventListener("submit", () => {

            if (trainButton) {

                trainButton.disabled = true;
                trainButton.textContent = "Starting training...";

            }

            if (progressContainer) {
                progressContainer.hidden = false;
            }

            if (progressText) {
                progressText.textContent =
                    "Submitting training request...";
            }

            // Actual training progress should be
            // received from the Flask backend.

        });

    }


    // =====================================
    // FLASH MESSAGE DISMISSAL
    // =====================================

    document.querySelectorAll(".flash-close").forEach(button => {

        button.addEventListener("click", () => {

            const message = button.closest(".flash-message");

            if (message) {
                message.remove();
            }

        });

    });


    // =====================================
    // INITIALIZATION
    // =====================================

    console.log("AutoML Model Builder initialized.");

});
