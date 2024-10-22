import User from "../models/User.js";
import Gallery from "../models/Gallery.js";
import TopProject from "../models/TopProject.js";

// Fungsi untuk menambahkan galeri baru
export const createGallery = async (req, res) => {
    const { name, qoute, image, portfolio_url } = req.body;

    // Basic validation
    if (!name || !image) {
        return res.status(400).json({
            status: "error",
            message: "Name and image are required fields"
        });
    }

    try {
        const newGallery = await Gallery.create({
            name,
            qoute,
            image,
            portfolio_url,
            createdAt: new Date(),
        });

        res.status(201).json({
            status: "success",
            message: "Gallery created successfully",
            data: newGallery,
        });
    } catch (error) {
        console.error("Error creating gallery:", error);
        res.status(500).json({
            status: "error",
            message: "Error creating gallery",
            error: error.message,
        });
    }
};

// Fungsi untuk mengedit galeri berdasarkan ID
export const updateGallery = async (req, res) => {
    const { id } = req.params;
    const { name, qoute, image, portfolio_url } = req.body;

    // Basic validation
    if (!name && !image && !qoute && !portfolio_url) {
        return res.status(400).json({
            status: "error",
            message: "At least one field is required for update"
        });
    }

    try {
        const gallery = await Gallery.findByPk(id);

        if (!gallery) {
            return res.status(404).json({
                status: "error",
                message: "Gallery not found",
            });
        }

        // Update fields if provided
        if (name) gallery.name = name;
        if (qoute) gallery.qoute = qoute;
        if (image) gallery.image = image;
        if (portfolio_url) gallery.portfolio_url = portfolio_url;
        
        await gallery.save();

        res.status(200).json({
            status: "success",
            message: "Gallery updated successfully",
            data: gallery,
        });
    } catch (error) {
        console.error("Error updating gallery:", error);
        res.status(500).json({
            status: "error",
            message: "Error updating gallery",
            error: error.message,
        });
    }
};

// Fungsi untuk mengambil galeri berdasarkan ID
export const getGalleryById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const gallery = await Gallery.findByPk(id, {
            attributes: ["id", "name", "qoute", "image", "portfolio_url", "createdAt"],
        });

        if (!gallery) {
            return res.status(404).json({
                status: "error",
                message: "Gallery not found",
            });
        }

        res.status(200).json({
            status: "success",
            data: gallery,
        });
    } catch (error) {
        console.error("Error fetching gallery:", error);
        res.status(500).json({
            status: "error",
            message: "Error fetching gallery",
            error: error.message,
        });
    }
};

// Fungsi untuk menghapus galeri berdasarkan ID
export const deleteGallery = async (req, res) => {
    const { id } = req.params;

    try {
        const gallery = await Gallery.findByPk(id);
        
        if (!gallery) {
            return res.status(404).json({
                status: "error",
                message: "Gallery not found",
            });
        }

        await gallery.destroy();

        res.status(200).json({
            status: "success",
            message: "Gallery deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting gallery:", error);
        res.status(500).json({
            status: "error",
            message: "Error deleting gallery",
            error: error.message,
        });
    }
};

// Fungsi untuk mendapatkan semua galeri
export const getAllGalleries = async (req, res) => {
    try {
        console.log('Getting galleries for user:', req.user);
        const galleries = await Gallery.findAll({
            attributes: ["id", "name", "qoute", "image", "portfolio_url", "createdAt"],
        });

        if (galleries.length === 0) {
            return res.status(404).json({
                status: "error",
                message: "No galleries found",
            });
        }

        res.status(200).json({
            status: "success",
            data: galleries,
        });
    } catch (error) {
        console.error("Error fetching galleries:", error);
        res.status(500).json({
            status: "error",
            message: "Error fetching galleries",
            error: error.message,
        });
    }
};

// Fungsi untuk membuat proyek unggulan baru
export const createTopProject = async (req, res) => {
    const { project_name, thumbnail, description, url_project } = req.body;

    // Basic validation
    if (!project_name || !thumbnail) {
        return res.status(400).json({
            status: "error",
            message: "Project name and thumbnail are required fields"
        });
    }

    try {
        const newProject = await TopProject.create({
            project_name,
            thumbnail,
            description,
            url_project,
        });

        res.status(201).json({
            status: "success",
            message: "Top project created successfully",
            data: newProject,
        });
    } catch (error) {
        console.error("Error creating top project:", error);
        res.status(500).json({
            status: "error",
            message: "Error creating top project",
            error: error.message,
        });
    }
};

// Fungsi untuk mendapatkan proyek unggulan berdasarkan ID
export const getTopProjectById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const project = await TopProject.findByPk(id);

        if (!project) {
            return res.status(404).json({
                status: "error",
                message: "Top project not found",
            });
        }

        res.status(200).json({
            status: "success",
            data: project,
        });
    } catch (error) {
        console.error("Error fetching top project:", error);
        res.status(500).json({
            status: "error",
            message: "Error fetching top project",
            error: error.message,
        });
    }
};

//fungsi untuk mengdapatkan semua proyek unggulan
export const getAllTopProjects = async (req, res) => {
    try {
        const projects = await TopProject.findAll();
        res.status(200).json({
            status: 'success',
            data: projects
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};


// Fungsi untuk memperbarui proyek unggulan
export const updateTopProject = async (req, res) => {
    const { id } = req.params;
    const { project_name, thumbnail, description, url_project } = req.body;

    // Basic validation
    if (!project_name && !thumbnail && !description && !url_project) {
        return res.status(400).json({
            status: "error",
            message: "At least one field is required for update"
        });
    }

    try {
        const project = await TopProject.findByPk(id);

        if (!project) {
            return res.status(404).json({
                status: "error",
                message: "Top project not found",
            });
        }

        // Update fields if provided
        if (project_name) project.project_name = project_name;
        if (thumbnail) project.thumbnail = thumbnail;
        if (description) project.description = description;
        if (url_project) project.url_project = url_project;

        await project.save();

        res.status(200).json({
            status: "success",
            message: "Top project updated successfully",
            data: project,
        });
    } catch (error) {
        console.error("Error updating top project:", error);
        res.status(500).json({
            status: "error",
            message: "Error updating top project",
            error: error.message,
        });
    }
};

// Fungsi untuk menghapus proyek unggulan
export const deleteTopProject = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await TopProject.findByPk(id);

        if (!project) {
            return res.status(404).json({
                status: "error",
                message: "Top project not found",
            });
        }

        await project.destroy();

        res.status(200).json({
            status: "success",
            message: "Top project deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting top project:", error);
        res.status(500).json({
            status: "error",
            message: "Error deleting top project",
            error: error.message,
        });
    }
};