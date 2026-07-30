// Props, short for propertiesa, are the way React components
// recieve data from their parent component
// Key-points:
    // Props are read-only inside the child
    // They flow one-way: from parent to child
    // Components are reusable
    
// Child component
function ProfileCard({name,role}) {
    return(
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
}

// Parent component
function ProfileList() {
    return(
        <div className="list">
            <h3>Team members</h3>
            {/* Each child component gets different data via props  */}
            <ProfileCard name="Kushal" role="Fullstack Developer" />
            <ProfileCard name="Vishwas" role="Frontend Developer" />
        </div>
    );
}
export default ProfileList;