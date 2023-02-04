import React, { useEffect, useState } from "react";
import TextField from "./textField";
import api from "../../../../api";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { validator } from "../../../utils/validator";
import SelectField from "./selectField";
import RadioField from "./radioField";
import MultiSelectField from "./multiSelectField";

const EditForm = ({ id, user, setUser }) => {
    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        profession: user.profession._id,
        sex: user.sex,
        qualities: [
            ...user.qualities.map(qualitie => ({
                color: qualitie.color,
                label: qualitie.name,
                value: qualitie._id
            }))
        ]
    });
    const [errors, setErrors] = useState({});
    const [professions, setProfessions] = useState([]);
    const [qualities, setQualities] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.professions.fetchAll().then(data => {
            const professionsList = Object.keys(data).map(professionName => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfessions(professionsList);
        });
        api.qualities.fetchAll().then(data => {
            const qualitiesList = Object.keys(data).map(optionName => ({
                label: data[optionName].name,
                value: data[optionName]._id,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, []);

    const getProfessionById = id => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };

    const handleChange = target => {
        setData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
        console.log(data.qualities);
    };

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя должно быть заполнено"
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите Вашу профессию"
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = e => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const dataEdited = {
            ...data,
            profession: getProfessionById(data.profession),
            qualities: [
                ...data.qualities.map(qualities => ({
                    _id: qualities.value,
                    name: qualities.label,
                    color: qualities.color
                }))
            ]
        };
        api.users.update(id, dataEdited);
        api.users.getById(id).then(data => setUser(data));
        history.replace(`/users/${id}`);
    };

    if (data.profession) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Имя"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        error={errors.name}
                    />
                    <TextField
                        label="Электронная почта"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        error={errors.email}
                    />
                    <SelectField
                        defaultOption="Choose..."
                        options={professions}
                        onChange={handleChange}
                        name="profession"
                        value={data.profession._id}
                        error={errors.profession}
                        label="Выберите Вашу профессию"
                    />
                    <RadioField
                        options={[
                            { name: "Male", value: "male" },
                            { name: "Female", value: "female" }
                        ]}
                        value={data.sex}
                        name="sex"
                        onChange={handleChange}
                        label="Выберите Ваш пол"
                    />
                    <MultiSelectField
                        options={qualities}
                        onChange={handleChange}
                        defaultValue={data.qualities}
                        name="qualities"
                        label="Выберите Ваши качества"
                    />
                    <button
                        type="submit"
                        disabled={!isValid}
                        className="btn btn-primary w-100 mx-auto"
                    >
                        Обновить
                    </button>
                </form>
            </div>
        );
    }
    return "loading...";
};
EditForm.propTypes = {
    id: PropTypes.string,
    user: PropTypes.object,
    setUser: PropTypes.func
};

export default EditForm;
