import DropdownHeader from 'components/Dropdown/DropdownHeader';
import React, { useEffect, useState } from 'react';
import { capitalizeString } from 'common/functions/index';
import { fetchCategories } from '../modules/categorySlice';
import { categoryApi } from 'apis/categoryApi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function MenuTab() {
    let currentTab = [
        'home'
        // 'page',
        // {
        //     category: 'blogs',
        //     menuCategory: ['women blog', 'men blog', 'technology blog']
        // },
        // 'contact'
    ];
    const [tabs, setTabs] = useState(null);
    const [caterogies, setCaterogies] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllCategory = async () => {
            const categories = await categoryApi.getAll();

            currentTab.splice(1, 0, ...categories);
            setTabs(currentTab);
            setCaterogies(categories);
            dispatch(fetchCategories(categories));
        };

        fetchAllCategory();
    }, []);

    if (tabs === null) {
        return <div>Loading</div>;
    }

    return (
        <div className="container mx-auto flex justify-start text-white font-medium">
            {tabs.map((tab, idx) => {
                if (typeof tab === 'string') {
                    if (tab === 'home') {
                        return (
                            <div
                                className="mx-2 w-30 hover:text-sky-500 hover:bg-white h-full p-4 whitespace-nowrap"
                                key={idx}
                            >
                                <Link to="/">{capitalizeString(tab)}</Link>
                            </div>
                        );
                    } else if (caterogies?.includes(tab)) {
                        return (
                            <div
                                className="mx-2 w-30 hover:text-sky-500 hover:bg-white h-full p-4 whitespace-nowrap"
                                key={idx}
                            >
                                <Link state={tab} to="/shopping">
                                    {capitalizeString(tab)}
                                </Link>
                            </div>
                        );
                    } else {
                        return (
                            <div
                                className="mx-2 w-30 hover:text-sky-500 hover:bg-white h-full p-4 whitespace-nowrap"
                                key={idx}
                            >
                                <a>{capitalizeString(tab)}</a>
                            </div>
                        );
                    }
                } else {
                    return (
                        <div
                            className="mx-2 p-4 hover:text-sky-500 hover:bg-white"
                            key={idx}
                        >
                            <DropdownHeader
                                menuArr={tab.menuCategory.map((item) => ({
                                    title: capitalizeString(item)
                                }))}
                                dropdownTitle={capitalizeString(tab.category)}
                            />
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default MenuTab;
