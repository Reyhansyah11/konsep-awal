import TopProject from '../models/TopProject.js';

class TopProjectController {
    // Get all top projects
    async getAllTopProjects(req, res) {
        console.log('getAllTopProjects called'); // Tambahkan log ini
        try {
            const topProjects = await TopProject.findAll();
            res.status(200).json({
                status: 'success',
                data: topProjects
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }

    // Get single top project by ID
    async getTopProjectById(req, res) {
        try {
            const { id } = req.params;
            const topProject = await TopProject.findByPk(id);
            
            if (!topProject) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Top project not found'
                });
            }

            res.status(200).json({
                status: 'success',
                data: topProject
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }

    // // Create new top project
    // async createTopProject(req, res) {
    //     try {
    //         const { project_name, thumbnail, description, url_project } = req.body;

    //         // Validate required fields
    //         if (!project_name || !thumbnail || !description || !url_project) {
    //             return res.status(400).json({
    //                 status: 'error',
    //                 message: 'All fields (project_name, thumbnail, description, url_project) are required'
    //             });
    //         }

    //         const topProject = await TopProject.create({
    //             project_name,
    //             thumbnail,
    //             description,
    //             url_project
    //         });

    //         res.status(201).json({
    //             status: 'success',
    //             data: topProject
    //         });
    //     } catch (error) {
    //         res.status(500).json({
    //             status: 'error',
    //             message: error.message
    //         });
    //     }
    // }

    // // Update top project
    // async updateTopProject(req, res) {
    //     try {
    //         const { id } = req.params;
    //         const { project_name, thumbnail, description, url_project } = req.body;

    //         const topProject = await TopProject.findByPk(id);

    //         if (!topProject) {
    //             return res.status(404).json({
    //                 status: 'error',
    //                 message: 'Top project not found'
    //             });
    //         }

    //         await topProject.update({
    //             project_name: project_name || topProject.project_name,
    //             thumbnail: thumbnail || topProject.thumbnail,
    //             description: description || topProject.description,
    //             url_project: url_project || topProject.url_project
    //         });

    //         res.status(200).json({
    //             status: 'success',
    //             data: topProject
    //         });
    //     } catch (error) {
    //         res.status(500).json({
    //             status: 'error',
    //             message: error.message
    //         });
    //     }
    // }

    // // Delete top project
    // async deleteTopProject(req, res) {
    //     try {
    //         const { id } = req.params;
    //         const topProject = await TopProject.findByPk(id);

    //         if (!topProject) {
    //             return res.status(404).json({
    //                 status: 'error',
    //                 message: 'Top project not found'
    //             });
    //         }

    //         await topProject.destroy();

    //         res.status(200).json({
    //             status: 'success',
    //             message: 'Top project deleted successfully'
    //         });
    //     } catch (error) {
    //         res.status(500).json({
    //             status: 'error',
    //             message: error.message
    //         });
    //     }
    // }
}

export default TopProjectController;